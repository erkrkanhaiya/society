import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { styles, LisView } from './_notificationcss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Gbutton from '@/Components/common/button/button'
import { useState } from 'react'
import Navigantion from '@/Components/common/navigation/navigantion'

export default function _Notification() {
  const [color, setColor] = useState(true) // default value of bg-color
  const [icon, setIcon] = useState(false)

  const listArr = [
    {
      icon: 'Bell',
      title: 'Your Society rent payment is pending so please pay this',
      time: '24min ago',
      status: 'Reminder',
      color: '#8447FF',
    },
    {
      icon: 'Event',
      title: 'Society admin add parking introduction',
      time: '24min ago',
      status: 'Event',
      color: '#FFA845',
    },

    {
      icon: 'Payment',
      title: 'Electricity bill payment update successful ',
      time: '24min ago',
      status: 'Payment',
      color: '#20CF79',
    },
    {
      icon: 'Birth',
      title: 'Birthday celebrations by Neraj kumar at home',
      time: '24min ago',
      status: 'Birthday',
      color: '#07B1FF',
    },
    {
      icon: 'Event',
      title: 'Society admin add parking introduction',
      time: '24min ago',
      status: 'Event',
      color: '#FFA845',
    },

    {
      icon: 'Payment',
      title: 'Electricity bill payment update successful ',
      time: '24min ago',
      status: 'Payment',
      color: '#20CF79',
    },
    {
      icon: 'Birth',
      title: 'Birthday celebrations by Neraj kumar at home',
      time: '24min ago',
      status: 'Birthday',
      color: '#07B1FF',
    },
    {
      icon: 'Event',
      title: 'Society admin add parking introduction',
      time: '24min ago',
      status: 'Event',
      color: '#FFA845',
    },

    {
      icon: 'Payment',
      title: 'Electricity bill payment update successful ',
      time: '24min ago',
      status: 'Payment',
      color: '#20CF79',
    },
    {
      icon: 'Birth',
      title: 'Birthday celebrations by Neraj kumar at home',
      time: '24min ago',
      status: 'Birthday',
      color: '#07B1FF',
    },
  ]

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  function _renderItem({ item, index }) {
    return (
      <LisView>
        <View style={styles?.listViewchild}>
          <View style={[styles?.icon, { backgroundColor: item?.color }]}>
            <SvgIcon name={item?.icon} size={'20'} />
          </View>
          <View style={[styles.textbox]}>
            <Text style={[styles.text]}>
              <Text style={styles.status}>{item?.status}:</Text>  {item?.title}
            </Text>

            <Text style={styles.pricetext}>{item?.time}</Text>
          </View>

          <View style={styles.dot}>
            <SvgIcon name={'Threedot'} height={18} width={5} />
          </View>
        </View>
      </LisView>
    )
  }

  return (
    <View
      style={{ backgroundColor: Colors?.white, flex: 1, paddingHorizontal: 15 }}
    >
      <Navigantion header={'Notifications'} />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList showsVerticalScrollIndicator={false}
          data={listArr}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  )
}
