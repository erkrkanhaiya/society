import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './createsuggestioncss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'

import { useNavigation, useTheme } from '@react-navigation/native'
import Navigantion from '@/Components/common/navigation/navigantion'
const image = ['Event1', 'Event2', 'Event3']

export default function Createsuggestion() {
  const [mail, setMail] = useState('')

  const [text, setText] = React.useState('')
  const nav = useNavigation()
  return (
    <Mainparent>
      <View style={styles.view2}>
        <Navigantion header={'Create Suggestion'} />
        <SafeAreaView style={styles.textview}>
          <_Input
            value={mail}
            onChangeText={setMail}
            label={'ENTER YOUR SUBJECT'}
          />
          <_Input
            value={mail}
            onChangeText={setMail}
            label={'ENTER YOUR MESSAGE'}
            height={250}
          />
          <Text style={[styles.dscription, styles.top]}>Photos</Text>
          <Text style={styles.dscription2}>(YOU CAN ADD UP TO 3 PHOTOS)</Text>
          <View style={styles.wrapbox}>
            {image.map((i, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginVertical: 5,
                  }}
                >
                  <View style={styles.uploadview}>
                    <SvgIcon name={'Dummyimg'} size={25} />
                    <Text style={styles.uploadtext}>Click to upload</Text>
                  </View>
                </View>
              )
            })}
          </View>
          <View style={styles.button}>
            <Gbutton texttitle={'Submit'} />
          </View>
        </SafeAreaView>
      </View>
    </Mainparent>
  )
}
