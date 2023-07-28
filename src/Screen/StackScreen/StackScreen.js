import React from 'react'
import { Login, Welcome, Invite, Createaccount } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeLayout from '@/Layout/WelcomeLayout'
import Questionnaire from '@/Containers/Questionnaire/Questionnaire'
import Questionnaire1 from '@/Containers/Questionnaire/Questionnaire1'
import Questionnaire2 from '@/Containers/Questionnaire/Questionnaire2'

const { Navigator, Screen } = createStackNavigator()

const StackScreen = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="Invite" component={Invite} />
      <Screen name="Createaccount" component={Createaccount} />
      <Screen name="Questionnaire" component={Questionnaire} />
      <Screen name="Questionnaire1" component={Questionnaire1} />
      <Screen name="Questionnaire2" component={Questionnaire2} />
    </Navigator>
  )
}

export default StackScreen
