import { View, Text, Switch, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { LisView, Noti, styles } from './calendorcss'
import Notification from '@/Assets/Icons/Notification'
import { SvgIcon, newlogin } from '@/Assets/Images/property'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DatePicker from 'react-native-date-picker'

export default function Calendor() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [date, setDate] = useState(new Date())

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={styles.navtext}>Event Calendor</Text>

      <View style={styles.mainview}>
        <View style={styles.mainviewchild}>
          <Text style={styles.mainviewtext}>Date</Text>
        </View>
        <View style={styles.mainviewchild}>
          <Text style={styles.mainviewtext}>Day</Text>
        </View>
        <View style={styles.mainviewchild}>
          <TouchableOpacity>
            <Text
              onPress={() => setOpen(true)}
              style={{
                color: '#FF0000',
                paddingHorizontal: 20,
              }}
            >
              DD/MM/YYYY
            </Text>
          </TouchableOpacity>
          <DatePicker
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
        </View>
        <View style={styles.mainviewchild}>
          <Text style={[styles.mainviewtext, styles.color]}>Monday</Text>
        </View>
        <View style={styles.mainviewchild}>
          <Text style={[styles.mainviewtext]}>Tithi</Text>
        </View>
        <View style={styles.mainviewchild}>
          <Text style={[styles.mainviewtext]}>Event Name</Text>
        </View>
        <View style={styles.mainviewchild}>
          <Text style={[styles.mainviewtext, styles.color]}>XXXXX</Text>
        </View>
        <View style={styles.mainviewchild}>
          <Text style={[styles.mainviewtext, styles.color]}>Sports</Text>
        </View>
        <View style={styles.mainviewchild2}>
          <Text style={[styles.mainviewtext]}>Information</Text>
        </View>
        <View style={styles.mainviewchild3}>
          <Text style={[styles.mainviewtext, styles.color2]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            ducimus libero repellat aliquid explicabo recusandae necessitatibus,
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
