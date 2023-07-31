import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import './Translations'
import { AuthProvider } from './Context/AuthContext'
import { AxiosProvider } from './Context/AxiosContext'
import { LogBox, SafeAreaView } from 'react-native'
LogBox.ignoreLogs(['new NativeEventEmitter'])
import './i18nextConfig'
import Homescreen from './Screen/home/homescreen'
import Signin from './Screen/auth/login/login'
// import Signup from './Screen/auth/signup/signup'
// import Forgotpassword from './Screen/auth/forgotpassword/forgotpass'
// import Numberverify from './Screen/auth/numberverify/numberverify'
// import Newpassword from './Screen/auth/newpassword/newpass'
// import Intro from './Screen/auth/intro/intro'
import { createStackNavigator } from '@react-navigation/stack'
import { Forgotpassword, Intro, Login, Signup } from './Screen/auth'
import { NavigationContainer } from '@react-navigation/native'
import Bankdetails from './Screen/auth/bankdetails/bankdetails'
import Details from './Screen/auth/details/details'
import Newlisting from './Screen/auth/newlisting/newlisting'
import Editprofile from './Screen/auth/editProfile/Editprofile'
import Setting from './Screen/auth/newsupdate/newsupdate'
// import Search from './Screen/auth/search/search'
import Newlisting2 from './Screen/auth/newlisting2/newlisting2'
import Nearbyproperty from './Screen/auth/nearbyproperty/nearbyproperty'
import Exploreproperty from './Screen/auth/exploreproperty/exploreproperty'
import Profile from './Screen/auth/profile/Profile'
import Search from './Screen/auth/search/search'
import advancesearch from './Screen/auth/advancesearch/advancesearch'
import Searchresult from './Screen/auth/searchresult/searchresult'
import Propertydetail from './Screen/auth/propertydetail/propertydetail'
import Advancesearch from './Screen/auth/advancesearch/advancesearch'
import Requestquery from './Screen/auth/requestquery/requestquery'
import Querydetails from './Screen/auth/querydetails/querydetails'
import Newlistingfill from './Screen/auth/newlistingfill/newlistingfill'
import Tutorial from './Screen/auth/tutorial/tutorial'
import Notification from './Screen/auth/notification/notification'
import Changepass from './Screen/auth/changepass/changepass'
import Familyprofile from './Screen/auth/familyprofile/familyprofile'
import Newsupdate from './Screen/auth/newsupdate/newsupdate'
import Calendor from './Screen/auth/calendor/calendor'
import Galary from './Screen/auth/gallary/gallary'
import Verification from './Screen/auth/verification/verification'
import Newpass from './Screen/auth/newpass/newpass'
import Event from './Screen/auth/event/event'

const App = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* <Intro /> */}
        {/* <Signin /> */}
        {/* <Newpassword/> */}
        {/* <Numberverify/> */}
        {/* <Signup /> */}
        {/* <Forgotpassword /> */}
        {/* <Homescreen /> */}
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />   
            {/* <Screen name="newpass" component={Newpass} />    */}
            {/* <Screen name="Forgotpassword" component={Forgotpassword} />      */}
            {/* <Screen name="Homescreen" component={Homescreen} /> */}
            {/* <Screen name="Event" component={Event} /> */}
            {/* <Screen name="Profile" component={Profile} /> */}
          </Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )

  return (
    <AuthProvider>
      <AxiosProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
            <SafeAreaView />
          </PersistGate>
        </Provider>
      </AxiosProvider>
    </AuthProvider>
  )
}
export default App
