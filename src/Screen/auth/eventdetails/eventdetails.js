import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Mainparent, styles } from './eventdetailscss'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'
import _Input from '@/Components/common/input/reusableinput'
import PasswordInput from '@/Components/common/input/password'
import { useNavigation, useTheme } from '@react-navigation/native'
import Navigantion from '@/Components/common/navigation/navigantion'

const image = ['Event1', 'Event2', 'Event3', 'Event4', 'Event5', 'Event6']

export default function Eventdetails() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [mailErr, setmailErr] = useState(false)

  function userhandler(e) {
    let item = e.target.value
    if (item.length < 3) {
      setmailErr(true)
    }
  }


  const nav = useNavigation()
  return (
    <Mainparent>
      <Navigantion header={'Event'}  {...nav}/>

      <View style={styles.view1child}>
        <SvgIcon name={'evdetails'} width={'100%'} height={'100%'} />
      </View>

      <SafeAreaView style={styles.view2}>
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 15,
          }}
        > */}
          <Text style={styles.headertext}>New Year Celebration</Text>

          <View style={styles.view3parent}>
            <View style={styles.view3}>
              <SvgIcon name={'Located'} width={'16px'} height={'16px'} />
              <Text style={styles.icontext}>Society club house</Text>
            </View>
            <View style={styles.view3}>
              <SvgIcon name={'Date'} width={'16px'} height={'16px'} />
              <Text style={styles.icontext}>Mon. 20 July at 9:30 AM</Text>
            </View>
          </View>

          <Text style={styles.dscription}>Dscription</Text>
          <Text style={styles.dscription2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          {[1, 1, 1].map((i, index) => {
            return (
              <View key={index} style={styles.dotparent}>
                <View style={styles.dot} />

                <Text style={[styles.dscription3]}>
                  Been the industry's standard dummy text ever
                </Text>
              </View>
            )
          })}

          <Text style={[styles.dscription, styles.top]}>Related Gallery</Text>
          <View style={styles.wrapbox}>
            {image.map((i, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginVertical: 5,
                  }}
                >
                  <SvgIcon name={i} width={'105px'} height={'75px'} />
                </View>
              )
            })}
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </Mainparent>
  )
}
