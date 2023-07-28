import { View, Text, Switch, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { LisView, Noti, styles } from './gallarycss'
import Notification from '@/Assets/Icons/Notification'
import { SvgIcon, newlogin } from '@/Assets/Images/property'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DatePicker from 'react-native-date-picker'

export default function Galary() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [date, setDate] = useState(new Date())

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={styles.navtext}>Event Gallary</Text>

      <View style={styles.mainview}>
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
      </View>
    </ScrollView>
  )
}
