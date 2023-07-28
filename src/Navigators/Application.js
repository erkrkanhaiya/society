import React, {
  Fragment,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './utils'
import { CommonTheme, navigationTheme, PatientTheme } from '@/Styles/theme'
import styled, { ThemeProvider } from 'styled-components'
import { AuthContext } from '@/Context/AuthContext'
import * as Keychain from 'react-native-keychain'
import { Loader } from '@/Components/atoms'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import StackScreen from '@/Screen/StackScreen/StackScreen'
import RightDrawerScreen from '@/Screen/DrawerScreen/RightDrawerScreen'
// import NotificationScreen from '@/Notification'
import { Button, StyleSheet } from 'react-native'
// import { notificationListener, requestUserPermission } from '@/Notification'
import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { Base64 } from '@/Util/helper'

const ApplicationNavigator = () => {
  const authContext = useContext(AuthContext)
  const [status, setStatus] = useState('loading')

  const loadJWT = useCallback(async () => {
    try {
      const value = await Keychain.getGenericPassword()
      const jwt = JSON.parse(value.password)
      // eslint-disable-next-line no-undef
      let token = Base64.atob((jwt?.accessToken || '')?.split('.')?.[1])
      if (token) {
        let expiryTime = String((JSON.parse(token) || {})?.exp)
          ?.split('.')
          ?.join('')
          ?.slice(0, -3)
        console.log(
          Date.now(),
          '🚀 ~ file: Application.js:38 ~ loadJWT ~ expiryTime',
          expiryTime,
        )
        if (Date.now() > expiryTime) {
          setStatus('error')
          authContext.setAuthState({
            accessToken: null,
            refreshToken: null,
            authenticated: false,
            role: null,
          })
          return
        }
      }
      authContext.setAuthState({
        accessToken: jwt?.accessToken || null,
        refreshToken: jwt?.refreshToken || null,
        authenticated: jwt?.accessToken !== null,
        role: jwt.role || null,
      })
      setStatus('success')
    } catch (error) {
      setStatus('error')
      authContext.setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
        role: null,
      })
      // return authContext.logout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    loadJWT()
  }, [loadJWT])

  const requestUserPermission = React.useCallback(async () => {
    //

    await messaging()
      .requestPermission()
      .then(status => {
        const enabled =
          status === messaging.AuthorizationStatus.AUTHORIZED ||
          status === messaging.AuthorizationStatus.PROVISIONAL
        if (enabled) {
          console.log('Authorization status is', status)
          getFCMToken()
        }
      })
  }, [])

  async function getFCMToken() {
    let savedFcmToken = await AsyncStorage.getItem('fcmtoken')

    if (!savedFcmToken) {
      try {
        const fcmToken = await messaging().getToken()
        if (fcmToken) {
          console.log(fcmToken, 'fcmToken')
          // await AsyncStorage.setItem('fcmToken', fcmToken)
        }
      } catch (error) {
        console.log('error in fcmToken', error)
      }
    }
  }

  useEffect(() => {
    requestUserPermission()
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('xcbf vc', remoteMessage)
      // do something with the message
    })
    return unsubscribe
  }, [])

  if (status === 'loading') {
    return <Loader />
  }

  return (
    <Fragment>
      <SafeAreaProvider>
        <ThemeProvider theme={{ ...CommonTheme, ...PatientTheme }}>
          {!authContext?.authState?.authenticated ? (
            <StyledSafeAreaView color="#491f69" edges={['top']}>
              <NavigationContainer theme={navigationTheme} ref={navigationRef}>
                <StackScreen />
              </NavigationContainer>
              <Toast />
            </StyledSafeAreaView>
          ) : (
            <StyledSafeAreaView color="#faf3ff" edges={['top']}>
              <NavigationContainer theme={navigationTheme} ref={navigationRef}>
                <RightDrawerScreen />
              </NavigationContainer>
              <Toast />
            </StyledSafeAreaView>
          )}
        </ThemeProvider>
      </SafeAreaProvider>
    </Fragment>
  )
}

export default ApplicationNavigator

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background: ${({ color }) => color};
`

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
  textStyle: {
    fontSize: 11,
    fontWeight: 'bold',
    padding: 5,
  },
})
