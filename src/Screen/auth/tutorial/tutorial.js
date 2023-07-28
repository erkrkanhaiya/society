import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './tutorialcss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
const data = [
  'Add Property Title ',
  'Add Location',
  'Property Size',
  'Property Price',
]
const image = [
    { image: newlisting.newlist1 },
    { image: newlisting.newlist2 },
    { image: newlisting.newlist3 },
  ]
export default function Tutorial() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.navtext}>Add New Listing Tutorial</Text>

      <View style={styles.mainview}>
        <Text style={styles.step}>STEP - 1</Text>
        <Text style={styles.details}>Basic Details</Text>
        <Text style={styles.details2}>Basic Details of add property</Text>
        <Text style={styles.details3}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </Text>

        {data.map((i, index) => {
          return (
            <View key={index} style={styles.bulletview}>
              <SvgIcon name={'Circle'} width={'8px'} height={'8px'} />
              <Text style={styles.bullettext}>{i}</Text>
            </View>
          )
        })}

        <Text style={[styles.step, styles.step2]}>STEP - 2</Text>
        <Text style={styles.details}>Property Images</Text>
        <Text style={styles.details4}>In publishing and gr aphic design, Lorem ipsum is a placeholder text commonly used to dem onstrate</Text>
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
        <Text style={styles.details3}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
        </Text>

        <Text style={[styles.step, styles.step2]}>STEP - 3</Text>
        <Text style={styles.details}>Add Your Personal Details</Text>
        <Text style={styles.details5}>personal details</Text>
        <Text style={styles.details3}>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
        </Text>
        <Text style={styles.details3}>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual  
        </Text>

        <Text style={[styles.step, styles.step2]}>STEP - 4</Text>
        <Text style={styles.details}>View Full video Totorial</Text>
      </View>
    </ScrollView>
  )
}
