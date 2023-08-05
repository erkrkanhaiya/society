import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './forgotpasscss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { useNavigation, useTheme } from '@react-navigation/native'

export default function Signin() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  
  const nav = useNavigation()
  return (
    <Mainparent>
      <View onc style={styles.view2}>
        <View style={styles.view1child}>
          <SvgIcon name={'forgotpass'} width={'210'} height={'160'} />
        </View>
        <SafeAreaView style={styles.textview}>
          <Text style={styles.textviewchild}>Forgot password</Text>
          <Text style={styles.textviewchild2}>
            Please enter your mobile no to receive a verification code.
          </Text>

          <_Input
            value={mail}
            onChangeText={setMail}
            icon={'Email'} size={20}
            label={'ENTER EMAIL ID'}

          />

          <View style={styles.button}>
            <Gbutton texttitle={'Submit'} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
