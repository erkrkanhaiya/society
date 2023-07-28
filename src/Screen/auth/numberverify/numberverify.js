import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Keyboard,
    StatusBar,
  } from 'react-native'
  import React, { useState, useEffect, useRef } from 'react'
  import { Mainparent, styles } from './numberverifycss'
  import Gbutton from '@/Components/common/button/button'
  import { SvgIcon } from '@/Assets/Images/property'
  import OTPInputView from '@twotalltotems/react-native-otp-input'
  import PhoneInput from 'react-native-phone-number-input'
  ;<OTPInputView
    style={{ width: '80%', height: 200 }}
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
  
  export default function Numberverify() {
    const [text, onChangeText] = React.useState('')
    const [Password, onChangePassword] = React.useState('')
    ///////
    const [value, setValue] = useState('')
    const [formattedValue, setFormattedValue] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const phoneInput = useRef()
  
    return (
      <Mainparent>
        <View style={styles.view1}>
          <View style={styles.view1child}>
            <SvgIcon name={'Bgimg'} width={'100%'} height={'100%'} />
          </View>
          <View style={styles.view1child2}>
            <Text style={styles.textparent}>Sign Up</Text>
            <Text style={styles.textchild}>Create an Account</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <SafeAreaView style={styles.textview}>
            <StatusBar barStyle="dark-content" />
            <View>
              <SafeAreaView>
                {showMessage && (
                  <View style={styles.message}>
                    <Text>Value : {value}</Text>
                    <Text>Formatted Value : {formattedValue}</Text>
                    <Text>Valid : {valid ? 'true' : 'false'}</Text>
                  </View>
                )}
                <PhoneInput
                  isValidNumber={true}
                  containerStyle={{ width: '100%' }}
                  keyboardType="number-pad"
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="IN"
                  layout="first"
                  onChangeText={text => {
                    setValue(text)
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValue(text)
                  }}
                  // withDarkTheme
                  // withShadow
                  autoFocus
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const checkValid = phoneInput.current?.isValidNumber(value)
                    setShowMessage(true)
                    setValid(checkValid ? checkValid : false)
                  }}
                >
                  {/* <Text>Check</Text> */}
                </TouchableOpacity>
              </SafeAreaView>
            </View>
            <View style={styles.button}>
              <Gbutton texttitle={'Verify'} />
            </View>
          </SafeAreaView>
        </View>
      </Mainparent>
    )
  }
  