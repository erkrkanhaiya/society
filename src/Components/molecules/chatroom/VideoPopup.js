import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import CallObjectContext from './CallObjectContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import packageJson from '../../../../package.json'
import { Orientation, useOrientation } from './useOrientation'
import CallPanel from './CallPanel'
import Tray from './Tray'
import Daily from '@daily-co/react-native-daily-js'
import { navigate } from '@/Navigators/utils'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export function robotID(id) {
  if (!id) id = ''
  // *coming soon* ios support
  return Platform.OS === 'ios' ? {} : { accessibilityLabel: id }
}

const AppState = {
  Idle: 'Idle',
  Creating: 'Creating',
  Joining: 'Joining',
  Joined: 'Joined',
  Leaving: 'Leaving',
  Error: 'Error',
}

const VideoPopup = ({ url = '', setShowVideo }) => {
  const chatRoomId = useSelector(store => store?.user?.rooms?.[0]?.chatroom_id)

  const [callObject, setCallObject] = useState(null)
  const [showTherapistVideo, setShowTherapistVideo] = useState(true)
  const orientation = useOrientation()
  const [appState, setAppState] = useState(AppState.Idle)

  const [roomUrl, setRoomUrl] = useState(
    `https://mysupportroom.daily.co/SR-${chatRoomId}`,
  )

  /**
   * Leave the current call.
   * If we're in the error state (AppState.Error), we've already "left", so just
   * clean up our state.
   */
  const leaveCall = useCallback(() => {
    if (!callObject) {
      return
    }
    setRoomUrl(undefined)
    setCallObject(null)
    setAppState(AppState.Idle)
    callObject.leave()
    setShowVideo(false)
    // if (appState === AppState.Error) {
    //   callObject.destroy().then(() => {
    //     setRoomUrl(undefined)
    //     setCallObject(null)
    //     setAppState(AppState.Idle)
    //   })
    // } else {
    //   setAppState(AppState.Leaving)
    //   callObject.leave()
    // }
    navigate('Chatroom')
  }, [callObject, appState])

  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       setRoomUrl(undefined)
  //       setCallObject(null)
  //       setAppState(AppState.Idle)
  //       callObject.leave()
  //     }
  //   }, []),
  // )

  /**
   * Attach lifecycle event handlers.
   */
  useEffect(() => {
    if (!callObject) {
      return
    }

    const events = ['joined-meeting', 'left-meeting', 'error']

    function handleNewMeetingState(event) {
      //   logDailyEvent(event)
      switch (callObject?.meetingState()) {
        case 'joined-meeting':
          setAppState(AppState.Joined)
          break
        case 'left-meeting':
          callObject?.destroy().then(() => {
            setRoomUrl(undefined)
            setCallObject(null)
            setAppState(AppState.Idle)
            navigator.pop()
          })
          break
        case 'error':
          setAppState(AppState.Error)
          setRoomUrl(undefined)
          setCallObject(null)
          setAppState(AppState.Idle)
          navigator.pop()
          break
        default:
          break
      }
    }

    // Use initial state
    handleNewMeetingState()

    // Listen for changes in state
    for (const event of events) {
      callObject.on(event, handleNewMeetingState)
    }

    // Stop listening for changes in state
    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleNewMeetingState)
      }
    }
  }, [callObject])

  /**
   * Listen for app messages from other call participants.
   * These only show up in the console.
   */
  useEffect(() => {
    if (!callObject) {
      return
    }

    function handleAppMessage(event) {
      if (event) {
        // logDailyEvent(event)
        console.log(`received app message from ${event.fromId}: `, event.data)
      }
    }

    callObject.on('app-message', handleAppMessage)

    return function cleanup() {
      callObject.off('app-message', handleAppMessage)
    }
  }, [callObject])

  /**
   * Join a call as soon as a callObject is created.
   * This effect must happen *after* the event handlers are attached, above.
   */
  useEffect(() => {
    if (!callObject || !roomUrl) {
      return
    }
    callObject.join({ url: roomUrl }).catch(_ => {
      // Doing nothing here since we handle fatal join errors in another way,
      // via our listener attached to the 'error' event
    })
    setAppState(AppState.Joining)
  }, [callObject, roomUrl])

  /**
   * Create the callObject as soon as we have a roomUrl.
   * This will trigger the call starting.
   */
  useEffect(() => {
    if (!roomUrl) {
      return
    }
    const newCallObject = Daily.createCallObject()
    setCallObject(newCallObject)
  }, [roomUrl])

  const showCallPanel = [
    AppState.Joining,
    AppState.Joined,
    AppState.Error,
  ].includes(appState)

  const enableCallButtons = [AppState.Joined, AppState.Error].includes(appState)

  return (
    <View
      style={styles.container}
      {...robotID(`robots-deps-${JSON.stringify(packageJson.dependencies)}`)}
    >
      {showCallPanel ? (
        <CallObjectContext.Provider value={callObject}>
          <View
            style={[
              styles.callContainerBase,
              // orientation === Orientation.Landscape
              //   ? styles.callContainerLandscape
              //   : null,
            ]}
          >
            <CallPanel
              roomUrl={roomUrl || ''}
              showTherapistVideo={showTherapistVideo}
            />
            <Tray
              onClickLeaveCall={leaveCall}
              disabled={!enableCallButtons}
              setShowTherapistVideo={setShowTherapistVideo}
            />
          </View>
        </CallObjectContext.Provider>
      ) : null}
    </View>
  )
}

export default VideoPopup

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callContainerBase: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  callContainerLandscape: {
    flexDirection: 'row',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyText: {
    // fontSize: theme.fontSize.base,
    marginBottom: 8,
    // fontFamily: theme.fontFamily.body,
  },
  startContainer: {
    flexDirection: 'column',
  },
  homeContainerPortrait: {
    paddingHorizontal: 24,
  },
  homeContainerLandscape: {
    paddingHorizontal: '20%',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 40,
  },
  logo: {
    alignSelf: 'flex-start',
    marginVertical: 40,
  },
  // roomUrlField: {
  //   borderRadius: 8,
  //   marginVertical: 8,
  //   padding: 12,
  //   backgroundColor: 'black',
  //   fontFamily: theme.fontFamily.body,
  //   color: theme.colors.greyDark,
  //   fontStyle: 'normal',
  //   fontWeight: 'normal',
  //   fontSize: theme.fontSize.base,
  //   borderWidth: 1,
  //   borderColor: theme.colors.grey,
  //   width: '100%',
  // },
  // errorText: {
  //   fontSize: theme.fontSize.base,
  //   color: theme.colors.red,
  //   marginLeft: 8,
  // },
  demoInputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  shortContainer: {
    width: '100%',
  },
  closeIcon: {
    height: 16,
    width: 16,
    marginLeft: 16,
  },
})
