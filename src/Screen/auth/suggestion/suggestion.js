import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { styles, LisView } from './suggestioncss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Gbutton from '@/Components/common/button/button'
import { useState } from 'react'
import Navigantion from '@/Components/common/navigation/navigantion'
import { useNavigation, useTheme } from '@react-navigation/native'


export default function Suggestion() {
  const [color, setColor] = useState(true) // default value of bg-color
  const [icon, setIcon] = useState(false)
  const nav = useNavigation()


  const listArr = [
    {
      icon: 'Suggestionicon',
      icontext: 'Sam Anderson, 24 minutes ago',
      title: 'Title of the Rquest Here',
      title2: 'Quo voluptas null pariatur?',
      time: '24min ago',
      dotcolor: 'red',
      statuscolor: '#00A7FF',
      status: 'IN WORK',
    },
    {
      icon: 'Suggestionicon',
      icontext: 'Sam Anderson, 24 minutes ago',
      title: 'Title of the Rquest Here',
      title2: 'Quo voluptas null pariatur?',
      time: '24min ago',

      statuscolor: '#FF8900',
      status: 'IN WORK',
    },
    {
      icon: 'Suggestionicon',
      icontext: 'Sam Anderson, 24 minutes ago',
      title: 'Title of the Rquest Here',
      title2: 'Quo voluptas null pariatur?',
      time: '24min ago',
      dotcolor: 'red',
      statuscolor: '#5FB118',
      status: 'IN WORK',
    },
    {
      icon: 'Suggestionicon',
      icontext: 'Sam Anderson, 24 minutes ago',
      title: 'Title of the Rquest Here',
      title2: 'Quo voluptas null pariatur?',
      time: '24min ago',

      statuscolor: '#ACB6C1',
      status: 'IN WORK',
    },
    {
      icon: 'Suggestionicon',
      icontext: 'Sam Anderson, 24 minutes ago',
      title: 'Title of the Rquest Here',
      title2: 'Quo voluptas null pariatur?',
      time: '24min ago',
      dotcolor: 'red',
      statuscolor: '#FF8900',
      status: 'IN WORK',
    },
  ]

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  function _renderItem({ item, index }) {
    return (
      <LisView>
        <View style={styles?.listViewchild}>
          <View style={[styles.textbox]}>
            <View>
              <Text style={[styles.text]}>{item?.title}</Text>
              <View
                style={[styles.circle, { backgroundColor: item?.dotcolor }]}
              >
                <Text style={styles.circlechild}>2</Text>
              </View>
            </View>
            <Text style={[styles.text2]}>{item?.title2}</Text>
            <View style={[styles?.icon, { backgroundColor: item?.color }]}>
              <SvgIcon name={item?.icon} size={'30'} />
              <Text style={styles.profiletext}>{item.icontext}</Text>
            </View>
            <View style={styles.timeview}>
              <Text style={styles.pricetext}>{item?.time}</Text>

              <Text
                style={[styles.status, { backgroundColor: item?.statuscolor }]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </LisView>
    )
  }

  return (
    <View
      style={{ backgroundColor: Colors?.white, flex: 1, paddingHorizontal: 15 }}
    >
      <Navigantion header={'Suggestion'} {...nav} />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listArr}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  )
}
