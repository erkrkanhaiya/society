import {
  View,
  Text,
  SafeAreaView,
  AppRegistry,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import Swiper from 'react-native-swiper'
import React from 'react'
import { styles, Viewmenu } from './homescreencss'
import { newproject } from '@/Assets/Images/property'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import { ScrollView } from 'react-native-gesture-handler'
import ViewButton from '@/Components/common/viewall/viewall'
import Maincard from '@/Components/common/maincard/maincard'
import styled from 'styled-components'
import { useNavigation, useTheme } from '@react-navigation/native'





const society = [
  { image: newproject.member, text: 'All Members', navTo: '' },
  { image: newproject.event, text: 'Events', navTo: 'Event' },
  { image: newproject.car, text: 'All Vehicle', navTo: '' },
  { image: newproject.noticebord, text: 'Notice Board', navTo: '' },
  { image: newproject.bills, text: 'Bills', navTo: '' },
]
const payments = [
  { image: newproject.bill, text: 'Bill Payment', navTo: '' },
  { image: newproject.rent, text: 'Rent Pay', navTo: '' },
  { image: newproject.siciety, text: 'Society Charge', navTo: '' },
]

const Other_activity = [
  { image: newproject.rule, text: 'Rules', navTo: '' },
  { image: newproject.loudspeaker, text: 'Announcement', navTo: '' },
  { image: newproject.suggestion, text: 'suggestion', navTo: '' },
]

export default function Homescreen() {
const nav = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.bgcolor}>
        <View style={styles.mainview}>
          {/* <View style={styles.profile}>
            <View style={styles.profilechild}>
              <View style={styles.view1parent}>
                <SvgIcon name={'burger'} width={'25px'} height={'25px'} />
              </View>
            </View>

            <Text style={styles.logo}>Logo</Text>
            <View style={styles.icon3}>
              <SvgIcon name={'icon3'} size={'24'} />
              <View style={styles.icon4}>
                <Text style={styles.icon4child}>2</Text>
              </View>
              <View style={styles.client}>
                <SvgIcon name={'Client'} width={'40px'} height={'40px'} />
              </View>
            </View>
          </View> */}

          <Viewmenu>
            <Swiper autoplay={true} style={styles.wrapper}>
              <View style={styles.slide1}>
                <View style={styles.parent}>
                  <SvgIcon name={'swiper1'} size="100%" />
                </View>
              </View>
              <View style={styles.slide2}>
                <View style={styles.parent}>
                  <SvgIcon name={'swiper2'} size="100%" />
                </View>
              </View>
              <View style={styles.slide3}>
                <View style={styles.parent}>
                  <SvgIcon name={'swiper1'} size="100%" />
                </View>
              </View>
            </Swiper>
          </Viewmenu>

          <View style={styles.containerparent}>
            <Text style={styles.headertext}>SOCIETY</Text>
            <View style={styles.container}>
              {society.map((i, index) => {
                return (
                  <View key={index} style={styles.containermain}>
                    <TouchableOpacity onPress={()=>{nav.navigate(i?.navTo)}}
                    style={styles.containerchild}>
                      <Image
                        source={i.image}
                        style={{ height: 35, width: 35 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.containertext}>{i.text}</Text>
                  </View>
                )
              })}
              <View
                style={{
                  width: 100,
                }}
              />
            </View>
          </View>

          <View style={styles.containerparent}>
            <Text style={styles.headertext}>PAYMENTS</Text>
            <View style={styles.container}>
              {payments.map((i, index) => {
                return (
                  <View key={index} style={styles.containermain}>
                    <View style={styles.containerchild}>
                      <Image
                        source={i.image}
                        style={{ height: 35, width: 35 }}
                      />
                    </View>
                    <Text style={styles.containertext}>{i.text}</Text>
                  </View>
                )
              })}
            </View>
          </View>
          <View style={[styles.containerparent, styles.boxWithShadow]}>
            <Text style={styles.headertext}>OTHER ACTIVITY</Text>
            <View style={styles.container}>
              {Other_activity.map((i, index) => {
                return (
                  <View key={index} style={styles.containermain}>
                    <View style={styles.containerchild}>
                      <Image
                        source={i.image}
                        style={{ height: 35, width: 35 }}
                      />
                    </View>
                    <Text style={styles.containertext}>{i.text}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Text>build version 07.26.00</Text>
    </ScrollView>
  )
}
