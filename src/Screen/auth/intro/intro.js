import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import {
  Textstyle,
  Main,
  Swipermenu,
  Mainparent,
  styles,
  Buttonview,
} from './introcss'
import Swiper from 'react-native-swiper'
import Gbutton from '@/Components/common/button/button'
import { SvgIcon } from '@/Assets/Images/property'

export default function Intro() {
  const nav = useNavigation()
  return (
    <Mainparent>
      <Swipermenu>
        <Swiper style={styles.wrapper}>
          <View style={styles.slide1}>
            <View style={styles.view}>
              <View style={styles.parent}>
                <SvgIcon name={'intro1'} size={'320'} />
                <View style={styles.child}>
                  <SvgIcon name={'intro1_1'} size={'150'} />
                </View>
              </View>
              <View style={styles.textbox}>
                <Text style={styles.textboxchild}>Looking For Lease</Text>
                <Text style={styles.textboxchild2}>
                  Ang Lorem Ipsum ay ginagamit na modelong industriya ng
                  pagpriprint at pagtytypeset
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.slide2}>
            <View style={styles.parent}>
              <SvgIcon name={'intro2'} size={'320'} />
              <View style={styles.child}>
                <SvgIcon name={'intro2_1'} size={'150'} />
              </View>
            </View>
            <View style={styles.textbox}>
              <Text style={styles.textboxchild}>Looking For Lease</Text>
              <Text style={styles.textboxchild2}>
                Ang Lorem Ipsum ay ginagamit na modelong industriya ng
                pagpriprint at pagtytypeset
              </Text>
            </View>
          </View>
          <View style={styles.slide3}>
            <View style={styles.parent}>
              <SvgIcon name={'intro3'} size={'320'} />
              <View style={styles.child}>
                <SvgIcon name={'intro3_1'} size={'150'} />
              </View>
            </View>
            <View style={styles.textbox}>
              <Text style={styles.textboxchild}>Looking For Lease</Text>
              <Text style={styles.textboxchild2}>
                Ang Lorem Ipsum ay ginagamit na modelong industriya ng
                pagpriprint at pagtytypeset
              </Text>
            </View>
          </View>
        </Swiper>
      </Swipermenu>
      <Main>
        <View style={styles.mainchild}>
          <Gbutton
            texttitle={'Get Started'}
            onClick={() => {
              nav.navigate('Login')
            }}
          />
        </View>
        <Buttonview>
          <Textstyle>skip for now </Textstyle>
        </Buttonview>
      </Main>
    </Mainparent>
  )
}
