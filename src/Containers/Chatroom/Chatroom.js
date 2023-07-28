/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef, useState } from 'react'
import { useContext } from 'react'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useEffect } from 'react'
import AuthLayout from '@/Layout/AuthLayout'
import Messages from '@/Components/molecules/chatroom/Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveChatroom, setMessages, setPatientProfile } from '@/Store/User'
import { AuthContext } from '@/Context/AuthContext'
import { Loader } from '@/Components/atoms'
import InputContainer from './InputContainer'
import { useFocusEffect } from '@react-navigation/native'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import Therapistprofile from '@/Components/molecules/chatroom/Therapistprofile'
import ScheduleCall from '@/Components/molecules/chatroom/ScheduleCall'
// import VideoPopup from '@/Components/molecules/chatroom/VideoPopup'

const getAllMessages = async (dispatch, authAxios, chatRoomID, pageLimit) => {
  try {
    const { data } = await authAxios.get(
      `${api.chatroom.messages}?chatroom_id=${chatRoomID}&page_limit=${pageLimit}`,
    )

    dispatch(setMessages(data))
  } catch (error) {
  } finally {
  }
}

const Chatroom = props => {
  const { authAxios } = useContext(AxiosContext)
  const authContext = useContext(AuthContext)

  const dispatch = useDispatch()
  const { profileId, chatRoomID, messages, profile } = useSelector(
    ({ user }) => {
      return {
        profileId: user?.profile?.id,
        chatRoomID: user?.chatRoomID,
        messages: user?.messages,
        profile: user?.profile,
      }
    },
  )

  const [pageLimit, setPageLimit] = useState(50)

  const scrollViewRef = useRef()
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await authAxios.get(api.patient.profile)

        dispatch(setPatientProfile(data.data))
      } catch (error) {
        console.log('xzdcfvg', error.response)
      }
    }
    getProfile()
  }, [])

  useFocusEffect(
    useCallback(() => {
      if (!profileId) {
        return
      }
      if (!profile?.quiz_group) {
        props.navigation.navigate('Questionnaire')
        return
      }
      if (profile?.moodbox_page_visited === 0 && profile.B2B) {
        props.navigation.navigate('Mood Box')
      }
      const getCurrentRoom = async () => {
        try {
          const { data } = await authAxios.get(api.chatroom.activeChatroom)
          dispatch(setActiveChatroom(data.data))
        } catch (error) {}
      }
      getCurrentRoom()
    }, [profileId, profile]),
  )

  useFocusEffect(
    useCallback(() => {
      if (!chatRoomID) {
        return
      }

      getAllMessages(dispatch, authAxios, chatRoomID, pageLimit)
    }, [chatRoomID, pageLimit]),
  )

  useFocusEffect(
    useCallback(() => {
      if (!chatRoomID) {
        return
      }
      const getAllunreadMessages = async () => {
        try {
          const { data } = await authAxios.get(api.chatroom.unreadMessages)

          if (data?.data?.unread_message_count) {
            getAllMessages(dispatch, authAxios, chatRoomID, pageLimit).then(
              async () => {
                const messageIds = data?.data?.messages.map(
                  ({ message_id }) => message_id,
                )

                await authAxios.post(api.chatroom.readMessages, {
                  message_id: JSON.stringify(messageIds),
                })

                scrollViewRef.current.scrollToEnd({ animated: false })
              },
            )
          }
        } catch (error) {}
      }

      const interval = setInterval(getAllunreadMessages, 10000)

      return () => {
        clearInterval(interval)
      }
    }, [chatRoomID, pageLimit]),
  )

  useFocusEffect(
    useCallback(() => {
      if (!messages?.data?.length) {
        return
      }
      scrollViewRef?.current?.scrollToEnd({ animated: false })
    }, []),
  )

  if (!profileId) {
    return <Loader />
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <AuthLayout {...props}>
          <Therapistprofile
            setShowVideo={props.setShowVideo}
            showVideo={props.showVideo}
          />
          <ScheduleCall />
          <Messages
            messages={messages?.data}
            pageLimit={messages?.pagination?.page_limit || 50}
            totalMessages={messages?.pagination?.total_messages || 0}
            userRole={authContext.authState.role}
            setPageLimit={setPageLimit}
            ref={scrollViewRef}
          />
          <InputContainer
            chatRoomID={chatRoomID}
            messageSentCallback={() =>
              getAllMessages(dispatch, authAxios, chatRoomID, pageLimit).then(
                () => scrollViewRef.current.scrollToEnd({ animated: false }),
              )
            }
          />
        </AuthLayout>
      </KeyboardAvoidingView>
    </>
  )
}

export default Chatroom

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#4c69a5',
    flex: 1,
    // paddingTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
