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
import { Mainparent, styles } from './familyprofilecss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { newlogin } from '@/Assets/Images/property'
export default function Familyprofile() {
  const [text, onChangeText] = React.useState('')
  const [Password, onChangePassword] = React.useState('')

  const data = [
    {
      text: 'Help Line Number',
      image: newlogin.family1,
    },
    {
      text: 'Suggestion Box',
      image: newlogin.family2,
    },
    {
      text: 'Calender',
      image: newlogin.family3,
    },
    {
      text: 'New’s Update',
      image: newlogin.family4,
    },
  ]
  return (
    <Mainparent>
      <View style={styles.view1}>
        <View style={styles.view1child}>
          <SvgIcon name={'Profile'} width={'60px'} height={'60px'} />
          <View style={styles.proview}>
            <Text style={styles.protext}>Hello Angelina</Text>
            <Text style={styles.protext2}>9571457122</Text>
          </View>
        </View>
        <View style={styles.memberparent}>
        <Text style={styles.member}>
        Family Member
        </Text>
       <View style={styles.addnewview}>
       <Text style={styles.addnew}>
        Add New
        </Text>
       </View>
        </View>
        <View style={styles.wrap}>
          {data.map((i, index) => {
            return (
              <View key={index} style={styles.wrapchild}>
                <Image
                  source={i.image}
                  style={{ height: 60, width: 60, marginTop: 15 }}
                />
              </View>
            )
          })}
        </View>
      </View>
    </Mainparent>
  )
}
