import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LeftDrawerScreen from './LeftDrawerScreen'
import RightDrawerContent from '@/Navigators/RightDrawerContent'

const { Navigator, Screen } = createDrawerNavigator()

const RightDrawerScreen = () => {
  return (
    <Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#513666',
        },
        cardStyle: { height: '100%' },
      }}
      drawerContent={RightDrawerContent}
    >
      <Screen name="LeftDrawer" component={LeftDrawerScreen} />
    </Navigator>
  )
}

export default RightDrawerScreen
