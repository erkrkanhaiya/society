import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()
const { Navigator, Screen } = Tab

const TopTabNavigation = ({ tabData }) => {
  return (
    <Navigator
      initialRouteName={tabData?.initialRoute}
      screenOptions={{
        tabBarActiveTintColor: tabData?.tintColor,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: tabData?.bgColor },
      }}
    >
      {tabData?.screen?.length &&
        tabData?.screen?.map(({ screenName, component }) => {
          return (
            <Screen
              key={screenName}
              name={screenName}
              component={component}
              options={{ tabBarLabel: screenName }}
            />
          )
        })}
    </Navigator>
  )
}
export default TopTabNavigation
