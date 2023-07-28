import React, { useState, useRef } from 'react'
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import { useTranslation } from 'react-i18next'

export default function Phonecountrypicker({defaultValue,onchange}) {
  const { t } = useTranslation()

  // const [phoneNumber, setPhoneNumber] = useState('')

  const phoneInput = useRef(null)

  // const getPhoneNumber = () => {
  //   Alert.alert(phoneNumber)
  // }

  return (
    <View style={styleSheet.MainContainer}>
      <Text style={styleSheet.label}>{t('mobileNumber')}</Text>
      <PhoneInput
        placeholder=" "
        ref={phoneInput}
        defaultValue={defaultValue}
        defaultCode="US"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styleSheet.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={onchange}
      />
      {/* <TouchableOpacity
        style={styleSheet.button}
        onPress={() => getPhoneNumber()}
      >
        <Text style={styleSheet.buttonText}>Get Phone Number</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // backgroundColor:'red'
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  heading: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black',
  },

  phoneNumberView: {
    width: '100%',
    marginBottom: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    height: 50,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderWidth:0.2,
    borderColor:'#ddd'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    padding: 8,
    backgroundColor: 'pink',
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  label: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
})
