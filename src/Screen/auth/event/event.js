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
import { styles, Viewmenu } from './eventcss'
import { newlogin, newproject } from '@/Assets/Images/property'
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
import { Colors } from '@/Theme/Variables'
import Navigantion from '@/Components/common/navigation/navigantion'

export default function Event() {
  const card_data = [
    {
      image: newproject.event1,
      headertext: 'New Year Celebration',
      location: 'Society club house',
      date: 'Mon. 20 July at 9:30 AM',
      occasion: 'Sawan Maas, Ekadashi',
    },
    {
      image: newproject.event2,
      headertext: 'Ganesh Chaturthi 2023',
      location: 'Society club house',
      date: 'Mon. 20 July at 9:30 AM',
      occasion: 'Sawan Maas, Ekadashi',
    },
    {
      image: newproject.event3,
      headertext: 'Annual Function',
      location: 'Society club house',
      date: 'Mon. 20 July at 9:30 AM',
      occasion: 'Sawan Maas, Ekadashi',
    },
  ]

  function _renderItem({ item, index }) {
    return (
      <View style={styles.cardview}>
        <View>
          <Image source={item.image} style={{ height: 127, width: 140 }} />
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              padding: 5,
              paddingHorizontal: 20,
              top: 10,
              left: -25,

              // overflow: 'hidden',
              transform: [{ rotate: '-50deg' }],
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              By User
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.cardtext}>{item.headertext}</Text>
          <View style={styles.addview2}>
            <SvgIcon name={'Located'} size="16px" />
            <Text style={styles.icontext}>{item.location}</Text>
          </View>
          <View style={styles.addview2}>
            <SvgIcon name={'Date'} size="14px" />
            <Text style={styles.icontext}>{item.date}</Text>
          </View>
          <View style={styles.addview2}>
            <SvgIcon name={'Occasion'} size="14px" />
            <Text style={styles.icontext}>{item.occasion}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: Colors?.white, paddingHorizontal: 15 }}>
      <Navigantion header={'Event'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View>
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
              <View style={styles.containermain}>
                <View style={styles.containerchild}>
                  <Image
                    source={newproject.event}
                    style={{ height: 26, width: 26 }}
                  />
                </View>
                <Text style={styles.containertext}>Upcoming events</Text>
              </View>
              <View style={styles.addview}>
                <SvgIcon name={'Plus'} size="20px" />
              </View>
            </View>

            <FlatList
              data={card_data}
              renderItem={_renderItem}
              keyExtractor={(item, index) => item.key}
            />
          </View>
        </SafeAreaView>
        <Text>build version 07.26.00</Text>
      </ScrollView>
    </View>
  )
}
