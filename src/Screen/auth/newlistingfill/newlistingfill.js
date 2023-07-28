import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './newlistingfillcss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'
const inputtext = [
  'Add Ttile Property',
  'Add Location',
  'Property Size',
  'Property Price',
  'Property Details',
]

const image = [
  { image: newlisting.newlist1 },
  { image: newlisting.newlist2 },
  { image: newlisting.newlist3 },
]
export default function Newlistingfill() {
  const [text, onChangeText] = React.useState()
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.navtext}>New Property Listing</Text>
      <View style={styles.mainview}>
        {inputtext.map((i, index) => {
          return (
            <View key={index}>
              <Text style={styles.mainviewtext}>{i}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                keyboardType="numeric"
              />
            </View>
          )
        })}
        <Text style={styles.mainviewtext}>Property Images</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {image.map((i, index) => {
            return (
              <View key={index} style={styles.image}>
                <Image source={i.image} style={{ height: 80, width: 80 }} />
              </View>
            )
          })}
        </View>
        
      </View>

      <TouchableOpacity style={styles.button}>
        <SvgIcon name={'Addimg'} width={'22px'} height={'22px'} />
        <Text style={styles.buttontext}>Add Property</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
