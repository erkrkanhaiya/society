import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { styles, LisView } from './billpaymentcss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Gbutton from '@/Components/common/button/button'
import { useState } from 'react'
import Navigantion from '@/Components/common/navigation/navigantion'
import { useNavigation, useTheme } from '@react-navigation/native'

export default function Billpayment() {
  const [color, setColor] = useState(true) // default value of bg-color
  const [icon, setIcon] = useState(false)
  const nav = useNavigation()

  function Clicked() {
    setColor(!color)
  }

  function Icon() {
    setIcon(!icon)
  }
  const listArr = [
    {
      icon: 'bulb2',
      title: 'My Listing',
      price: '365',
      badgecolor: '#5FB118',
      status: 'Receipt',
      statustext: 'PAID',
      statusicon: 'recipt',
      iconsize: '25',
    },
    {
      icon: 'drop2',
      title: 'My Listing',
      price: '365',
      badgecolor: '#5FB118',
      status: 'Pay Now',
      statusicon: 'ccpay',
      statustext: 'PENDING',

      badgecolor: '#E3BD14',
      iconsize: '22',
    },
    {
      icon: 'key2',
      title: 'My Listing',
      price: '365',
      badgecolor: '#5FB118',
      status: 'Pay Now',
      statusicon: 'ccpay',
      statustext: 'FAILED',

      badgecolor: 'red',
      iconsize: '28',
    },
    {
      icon: 'document2',
      title: 'My Listing',
      price: '365',
      badgecolor: '#5FB118',
      statustext: 'PAID',

      status: 'Receipt',
      statusicon: 'recipt',
      badgecolor: '#5FB118',
      iconsize: '22',
    },
  ]

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  function _renderItem({ item, index }) {
    return (
      <LisView
        key={item?.icon}
        onPress={() => {
          Clicked(), Icon()
        }}
      >
        <View style={styles?.listView}>
          <View style={styles?.listViewchild}>
            <View style={styles?.iconviewmain}>
              <SvgIcon name={item?.icon} size={item.iconsize} />
            </View>
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={[styles.text, { color: item?.color && item?.color }]}
              >
                {item?.title}
              </Text>
              <Text style={styles.pricetext}>Rs. {item?.price}/-</Text>
            </View>
          </View>
        </View>
        <View style={[styles.status, { backgroundColor: item?.badgecolor }]}>
          <Text style={styles.view1}>{item.statustext}</Text>
        </View>
        <View style={styles.bottomsec}>
          <Text style={styles.bottomsectext}>
            <Text style={styles.bottomsectext2}>Paid on</Text> 03 Jul, 05:50pm
          </Text>
          <View style={styles.iconview}>
            <SvgIcon name={item?.statusicon} size={'18'} />

            <Text style={styles.iconviewtext}>{item?.status}</Text>
          </View>
        </View>
      </LisView>
    )
  }

  return (
    <View
      style={{ backgroundColor: Colors?.white, flex: 1, paddingHorizontal: 15 }}
    >
      <Navigantion header={'Bill Payment'} {...nav} />
      <View>
        <FlatList
          data={listArr}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  )
}
