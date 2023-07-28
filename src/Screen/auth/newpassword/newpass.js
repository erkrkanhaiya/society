import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './newpasscss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import PasswordInput from '@/Components/common/input/password'
export default function Newpassword() {
  const [text, onChangeText] = React.useState('')
  const [Password, onChangePassword] = React.useState('')
  return (
    <Mainparent>
      <View style={styles.view1}>
        <View style={styles.view1child}>
          <SvgIcon name={'Bgimg'} width={'100%'} height={'100%'} />
        </View>
        <View style={styles.view1child2}>
          <Text style={styles.textparent}>Create New Password</Text>
          <Text style={styles.textchild}>
            Your new password must be different from previously used passwords.
          </Text>
        </View>
      </View>
      <View style={styles.view2}>
        <SafeAreaView style={styles.textview}>
          <Text style={styles.textviewchild}>New Password</Text>
          <PasswordInput placeholder={'Enter new Password'} />
          <Text style={styles.textviewchild}>Confirm New Password</Text>
          <PasswordInput placeholder={'Confirm new Password'} />
          <View style={styles.button}>
            <Gbutton texttitle={' Create'} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
