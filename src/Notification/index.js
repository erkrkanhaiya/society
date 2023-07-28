import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    console.log('Authorization status:', authStatus)
    getFCMToken()
  }
}

async function getFCMToken() {
  let savedFcmToken = await AsyncStorage.getItem('fcmtoken')

  if (!savedFcmToken) {
    try {
      const fcmToken = await messaging.getToken()
      if (fcmToken) {
        console.log(fcmToken, 'fcmToken')
        await AsyncStorage.setItem('fcmToken', fcmToken)
      }
    } catch (error) {
      console.log('error in fcmToken')
    }
  }
}

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    )
    // navigation.navigate(remoteMessage.data.type);
  })

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        )
        // setInitialRoute(remoteMessage.data.type) // e.g. "Settings"
      }
      // setLoading(false)
    })

  messaging.onMessage(async remoteMessage => {
    console.log('foreground message', remoteMessage)
  })
}
