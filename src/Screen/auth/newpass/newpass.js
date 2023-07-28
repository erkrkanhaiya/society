import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './newpasscss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon, newlogin } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { useNavigation, useTheme } from '@react-navigation/native'
// import { newlogin } from '@/Assets/Images/property'
const image = newlogin.home1
export default function Newpass() {
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
          <SvgIcon name={'new_pass'} width={'210'} height={'160'} />
          <View style={{ position: 'absolute', left: 0, top: 0 }}>
            <SvgIcon name={'bg1'} width={'150'} height={'150'} />
          </View>
          <View style={{ position: 'absolute', right: -50, top: 0 }}>
            <SvgIcon name={'bg2'} width={'150'} height={'180'} />
          </View>
        </View>
        {/* <View style={styles.view1child}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />
        </View> */}
        <SafeAreaView style={styles.textview}>
          <Text style={styles.textviewchild}>New password</Text>
          <Text style={styles.textviewchild2}>Enter your new password</Text>

          <_Input value={mail} onChangeText={setMail} />

          <PasswordInput label={'Confirm password'} />

          <TouchableOpacity
            onPress={() => {
              nav.navigate('Forgotpassword')
            }}
          ></TouchableOpacity>

          <View style={styles.button}>
            <Gbutton texttitle={'Submit'} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
