import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './logincss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { useNavigation, useTheme } from '@react-navigation/native'

export default function Signin() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  // const [mailErr, setmailErr] = useState(false)

  // function userhandler(e) {
  //   let item = e.target.value
  //   if (item.length < 3) {
  //     setmailErr(true)
  //   }
  // }
  const nav = useNavigation()
  return (
    <Mainparent>
      <View onc style={styles.view2}>
      <View style={styles.view1child}>
          <SvgIcon name={'loginimg'} width={'210'} height={'160'} />
        </View>
        <SafeAreaView style={styles.textview}>
        <Text style={styles.textviewchild}>Login</Text>
          <Text style={styles.textviewchild2}>Login to Continue!</Text>
       
          <_Input
            value={mail}
            onChangeText={setMail}
       label={'ENTER YOUR EMAIL'}
          />

          <PasswordInput label={'Enter password'} />

          <TouchableOpacity
            onPress={() => {
              nav.navigate('Forgotpassword')
            }}
          ></TouchableOpacity>

        
          <Text style={styles.sidebutton2}>Forgot Password?</Text>
          <View style={styles.button}>
            <Gbutton texttitle={'Login'} onClick={()=>{
               nav.navigate('HomeDrawer')
            }} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
