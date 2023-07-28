import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './verificationcss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { useNavigation, useTheme } from '@react-navigation/native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default function Verification() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigation()
  return (
    <Mainparent>
      <View onc style={styles.view2}>
        <View style={styles.view1child}>
          <SvgIcon name={'verify'} width={'210'} height={'160'} />
        </View>
        <SafeAreaView style={styles.textview}>
          <View style={styles.middleview}>
            <Text style={styles.textviewchild}>
              Enter your verification {'\n'} code
            </Text>
            <Text style={styles.textviewchild2}>
              We sent a verification code to {'\n'}
              <Text style={styles.spantext}>usermail@gmail.com</Text>
            </Text>
          </View>
          <OTPInputView
            style={{ width: '100%', height: 120 }}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`)
            }}
          />
         
          <Text style={[styles.textviewchild2, styles.justifytext]}>
            Send the code
            <Text style={styles.spantext}> Again?</Text>
          </Text>
          <Text style={[styles.textviewchild2, styles.justifytext2]}>
            Change Mobile number
            <Text style={styles.spantext}> Click here?</Text>
          </Text>
          <View style={styles.button}>
            <Gbutton texttitle={'Verify'} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
