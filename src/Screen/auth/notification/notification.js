import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './notificationcss'
import Collapsible from 'react-native-collapsible'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import { array } from 'prop-types'
const data = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo ...',
    expendtext:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo ...',
    expendtext:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo ...',
    expendtext:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo ...',
    expendtext:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo',
  },
]
export default function Notification() {
  const [collasped, setCollasped] = React.useState(true)
  const [icon, seticon] = React.useState(true)

  const toggleExpend = () => {
    setCollasped(!collasped)
  }
  const iconchange = () => {
    seticon(!icon)
  }

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={styles.navtext}>Notification</Text>

      {data.map((i, index ,array) => {
      console.log(index.valueOf)
        return (
          <TouchableOpacity
            style={styles.touchview}
            key={index}
            onPress={() => {
              toggleExpend(), iconchange()
            }}
          >
            <View style={styles.touchviewchild} >
              <Text style={styles.text}>{i.text}</Text>
              <View style={styles.text2}>
                <SvgIcon name={icon ? 'Dwn' : 'Up'} size="20" />
              </View>
            </View>
          
           <Collapsible    collapsed={index == 0 && collasped}>
              <View style={styles.view}>
                <Text style={styles.view2}>{i.expendtext}</Text>
              </View>
            </Collapsible>
          
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}
