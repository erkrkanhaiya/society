import { View, Text, Switch, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { LisView, Noti, styles } from './newsupdatecss'
import Notification from '@/Assets/Icons/Notification'
import { SvgIcon, newlogin } from '@/Assets/Images/property'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Newsupdate() {
  const [isEnabled, setIsEnabled] = useState(false)

  const datas = [
    {
      image: newlogin.update1,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo recusandae necessitatibus,',
    },
    {
      image: newlogin.update2,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo recusandae necessitatibus,',
    },
    {
      image: newlogin.update1,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo recusandae necessitatibus,',
    },
    {
      image: newlogin.update2,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus libero repellat aliquid explicabo recusandae necessitatibus,',
    },
  ]

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={styles.navtext}>New’s Update
</Text>
      {datas.map((i, index) => {
        return (
          <View key={index} style={styles.navtextview}>
            <View>
              <Image source={i.image} style={{ height: 65, width: 125 }} />
            </View>
            <View style={styles.width}>
              <Text style={styles.navtext2}>{i.text}</Text>
              <TouchableOpacity>
                <Text style={styles.seemore}>See more</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}
