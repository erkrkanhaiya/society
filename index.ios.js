/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import messaging from '@react-native-firebase/messaging'
import { notificationListener } from '@/Notification'

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message received in the background!', remoteMessage)
  notificationListener.displayNotification({
    title: 'Message title',
    body: `Message body with`,
    android: {
      channelId: 'yourChannelId',
      sound: 'default',
      smallIcon: 'ic_push_notification',
      pressAction: {
        id: 'default',
      },
    },
    ios: {
      sound: 'customSound.wav',
    },
  })
})

AppRegistry.registerComponent(appName, () => App)

// AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
