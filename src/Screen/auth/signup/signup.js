import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './signupcss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { newlogin } from '@/Assets/Images/property'
export default function Signup() {
  const [text, onChangeText] = React.useState('')
  const [Password, onChangePassword] = React.useState('')

  const data = [
    {
      text: 'Help Line Number',
      image: newlogin.home1,
    },
    {
      text: 'Suggestion Box',
      image: newlogin.home3,
    },
    {
      text: 'Calender',
      image: newlogin.home4,
    },
    {
      text: 'New’s Update',
      image: newlogin.home2,
    },
  ]
  return (
    <Mainparent>
      <View style={styles.view1}>
        <View style={styles.view1child}>
          <SvgIcon name={'Home'} width={'100%'} height={'100%'} />
        </View>
        <View style={styles.wrap}>
          {data.map((i, index) => {
            return (
              <View key={index} style={styles.wrapchild}>
                <Image source={i.image} style={{ height: 120, width: 120 }} />
                <Text style={styles.text}>{i.text}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </Mainparent>
  )
}
