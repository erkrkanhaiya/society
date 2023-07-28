import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './changepasscss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { useNavigation, useTheme } from '@react-navigation/native'

export default function Changepass() {
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
        <SafeAreaView style={styles.textview}>
          <Text style={styles.textviewchild}>Old Password</Text>
          <_Input
            value={mail}
            onChangeText={setMail}
            icon={'vector'}
            placeholder={'entre old password'}
          />
          <Text style={styles.textviewchild}>New Password</Text>
          <PasswordInput placeholder={'entre new password'} />
          <Text style={styles.textviewchild}>Confirm Password</Text>
          <PasswordInput placeholder={'entre confirm password'} />
          <TouchableOpacity
            onPress={() => {
              nav.navigate('Forgotpassword')
            }}
          ></TouchableOpacity>
          <View style={styles.button}>
            <Gbutton texttitle={'SAVE'} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
