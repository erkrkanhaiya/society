import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { styles, LisView } from './addmembercss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Gbutton from '@/Components/common/button/button'
import { useState } from 'react'
import Navigantion from '@/Components/common/navigation/navigantion'
import { useNavigation, useTheme } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select'
import DatePicker from 'react-native-date-picker'
import styled from 'styled-components'
export default function Addmember() {
  const [text, onChangeText] = React.useState('')
  const [chosenDate, setChosenDate] = useState(new Date())
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const nav = useNavigation()

  return (
    <View
      style={{ backgroundColor: Colors?.white, flex: 1, paddingHorizontal: 15 }}
    >
      <Navigantion header={'Add Family Member'} />
      <View style={styles.proview}>
        <View>
          <View style={styles.uploadview}>
            <SvgIcon name={'Dummyimg'} size={35} />
            <View style={styles.proviewchild}>
              <SvgIcon name={'camera'} size={16} />
            </View>
          </View>
        </View>
        <Text style={styles.uploadtext}>Upload Photo</Text>
      </View>

      <View
        style={{
          flex: 3,
          // backgroundColor: '#9999',
        }}
      >
        <View style={styles.container}>
          <Text style={styles.textviewchild}>Enter Member Name</Text>
          <Inputview>
            <SvgIcon name={'userd'} size={20} />
            <TextInput
              style={{ flex: 1, marginLeft: 10 }}
              onChangeText={onChangeText}
              placeholder={'Name'}
              placeholderTextColor="#706E6E"
              value={text}
            />
          </Inputview>
          <Text style={styles.textviewchild}>Enter your contact number</Text>

          <Inputview>
            <SvgIcon name={'line'} size={20} />
            <TextInput
              style={{ flex: 1, marginLeft: 10, }}
              onChangeText={onChangeText}
              placeholder={'Number'}
              placeholderTextColor="#706E6E"
              value={text}
            />
          </Inputview>
          <Text style={styles.containerchild}>Select Relationship</Text>
          <View style={styles.viewchild}>
            <View style={styles.viewchild2}>
              <SvgIcon
                name={'line'}
                width={'18px'}
                height={'18px'}
                paddingTop={17}
              />
              <RNPickerSelect
                style={{
                  placeholder: {
                    color: '#747474',
                    fontSize: 15,
                    fontWeight: '500',
                    marginLeft: 10,
                  },
                  viewContainer: {
                    marginLeft: 15,
                    flex: 0.95,
                    justifyContent: 'center',
                  },
                  placeholder: {
                    color: '#706E6E',
                  },
                }}
                onValueChange={value => console.log(value)}
                items={[
                  { label: 'Sister', value: 'Sister' },
                  { label: 'Brother', value: 'Brother' },
                  { label: 'Father', value: 'Father' },
                ]}
              />
            </View>
            <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
          </View>
          <Text style={[styles.textviewchild, styles.margin]}>
            Date of Birth{' '}
          </Text>

          <Inputview onPress={() => setOpen(true)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <SvgIcon name={'dob'} size={20} />
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
              <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
            </View>
          </Inputview>
          <Text style={[styles.containerchild]}>Select Education</Text>
          <View style={styles.viewchild}>
            <View style={styles.viewchild2}>
              <SvgIcon
                name={'hat'}
                width={'18px'}
                height={'18px'}
                paddingTop={17}
              />
              <RNPickerSelect  
            
                style={{
                  placeholder: {
                    color: '#747474',
                    fontSize: 15,
                    fontWeight: '500',
                    marginLeft: 10,
                  },
                  viewContainer: {
                    marginLeft: 15,
                    flex: 0.95,
                    justifyContent: 'center',
                  },
                  placeholder: {
                    color: '#706E6E',
                  },
                }}
                onValueChange={value => console.log(value)}
                items={[
                  { label: 'B.tech engineering', value: 'B.tech engineering' },
                  {
                    label: 'Bachlor of computer application',
                    value: 'Bachlor of computer application',
                  },
                  {
                    label: 'Master of computer application',
                    value: 'Master of computer application',
                  },
                ]}
              />
            </View>
            <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
          </View>
        </View>
        {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
        {/* <SvgIcon title="Open" onPress={() => setOpen(true)} name={'Down'} width={'15px'} height={'15px'}  /> */}
      </View>
    </View>
  )
}
const Inputview = styled(TouchableOpacity)`
  height: 50px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-width: 1px;
  padding: 10px;
  border-color: #dad7d7;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
