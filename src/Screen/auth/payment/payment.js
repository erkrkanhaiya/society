import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { styles, LisView } from './paymentcss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Gbutton from '@/Components/common/button/button'
import { useState } from 'react'

export default function Payment() {
  const [color, setColor] = useState(true) // default value of bg-color
  const [icon, setIcon] = useState(false)

  function Clicked() {
    setColor(!color)
  }

  function Icon() {
    setIcon(!icon)
  }
  const listArr = [
    {
      icon: 'bulb',
      title: 'My Listing',
      price: '365',
    },
    {
      icon: 'drop',
      title: 'Request query',
      price: '365',
    },
    {
      icon: 'key',
      title: 'Pricing',
      price: '365',
    },
    {
      icon: 'tax',
      title: 'Upgrade profile',
      price: '365',
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
            <SvgIcon name={item?.icon} size={'30'} />
            <View
              style={{
                marginLeft: 15,
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
          <View
            style={[
              styles.notification,
              { backgroundColor: color ? '#EEEEEE' : '#45A5B6' },
            ]}
          >
            {icon && <SvgIcon name={'true'} width={12} height={10} />}
          </View>
        </View>
      </LisView>
    )
  }

  return (
    <View
      style={{ backgroundColor: Colors?.white, flex: 1, paddingHorizontal: 15 }}
    >
      <View>
        <View style={styles.profilechild}>
          <View
            style={{
              position: 'absolute',
            }}
          >
            <SvgIcon name={'Back2'} width={'14px'} height={'14px'} />
          </View>

          <View style={styles.logoparent}>
            <Text style={styles.logo}>Bill Payment</Text>
          </View>
        </View>
        <Text style={styles.header}>All Payable bill</Text>
        <View style={[styles?.listView, styles.margin]}>
          <Text style={styles.selectall}>Select All</Text>
          <View style={styles.notification}>
            <SvgIcon name={'true'} width={12} height={10} />
          </View>
        </View>
        <FlatList
          data={listArr}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.key}
        />
        <View style={styles.button}>
          <Gbutton texttitle={'Pay Rs.160/-'} icon={true} />
        </View>
      </View>
    </View>
  )
}
