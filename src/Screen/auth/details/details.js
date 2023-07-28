import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native'
import { styles, Viewmenu } from './detailscss'
import _Button from '@/Components/common/_button/_button'
import _Input from '@/Components/common/input/reusableinput'

import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import Smallcard from '@/Components/common/card/smallcard'
import CheckBox from '@react-native-community/checkbox'
import DatePicker from 'react-native-date-picker'
export default function Details() {
  const [mail, setMail] = useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maindetailview}
    >
      <View style={styles.mentorchild}>
        <Text style={styles.profile}>Profile</Text>
        <View style={styles.view1parent}>
          <SvgIcon name={'Profile'} width={'60px'} height={'60px'} />
          <View style={styles.Mentorarc2}>
            <SvgIcon name={'Proarc'} width={'26px'} height={'26px'} />
          </View>
        </View>
        <Text style={styles.label}>Hello Angelina</Text>
      </View>
      <View style={styles.inputview}>
        <Text style={styles.label}>Name</Text>
        <_Input
          value={mail}
          onChangeText={setMail}
          icon={'vector'}
          placeholder={'Name'}
        />
        <Text style={styles.label}>E-mail</Text>
        <_Input
          value={mail}
          onChangeText={setMail}
          icon={'vector'}
          placeholder={'E-mail'}
        />
        <Text style={styles.label}>Ph.No.</Text>
        <_Input
          value={mail}
          onChangeText={setMail}
          icon={'vector'}
          placeholder={'Ph.No.'}
        />
        <View style={styles.labelview}>
          <View style={styles.labelviewchild}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.gender}>
              <View style={styles.genderchild}>
                <Text style={styles.label}>Male</Text>
                <CheckBox
                  onCheckColor="#03fc2c"
                  animationDuration={0.1}
                  style={{
                    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                  }}
                  onFillColor="#03fc2c"
                  onTintColor="#03fc2c"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>

              <View style={styles.genderchild}>
                <Text style={styles.label}>Female</Text>
                <CheckBox
                  onCheckColor="#03fc2c"
                  animationDuration={0.1}
                  style={{
                    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                  }}
                  onFillColor="#03fc2c"
                  onTintColor="#03fc2c"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.label}>DOB</Text>
            <View style={styles.gender}>
              <TouchableOpacity>
                <Text
                  onPress={() => setOpen(true)}
                  style={{
                    color: '#323941',
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
        </View>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <Text style={styles.label}>Anniversary</Text>
          <View style={styles.gender}>
            {/* <Button 
              color={'#323941'}
              title="DD/MM/YYYY"
              onPress={() => setOpen(true)}
            /> */}
            <TouchableOpacity>
              <Text
                onPress={() => setOpen(true)}
                style={{
                  color: '#323941',
                }}
              >
                DD/MM/YYYY
              </Text>
            </TouchableOpacity>
            <DatePicker
              mode="date"
              modal
              open={open2}
              date={date}
              onConfirm={date => {
                setOpen2(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen2(false)
              }}
            />
          </View>
        </View>
        <Text style={[styles.label, styles.label2]}>
          Service/Business/Profission
        </Text>
        <_Input
          value={mail}
          onChangeText={setMail}
          icon={'vector'}
          placeholder={'Ph.No.'}
        />
        <Text style={styles.label}>Address</Text>
        <_Input
          value={mail}
          onChangeText={setMail}
          icon={'vector'}
          placeholder={'Ph.No.'}
        />
      </View>
      <Text style={styles.passwordtext}>CHANGE PASSWORD</Text>

      {/* <Text>Build Version 17.06.00</Text> */}
    </ScrollView>
  )
}
