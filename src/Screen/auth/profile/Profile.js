import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { ProfileCard, styles, LisView } from './profilecss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Navigantion from '@/Components/common/navigation/navigantion'

export default function Profile() {
  const listArr = [
    {
      icon: 'Terms',
      title: 'My Listing',
    },
    {
      icon: 'Privacy',
      title: 'Request query',
    },
    {
      icon: 'Passwordnoti',
      title: 'Pricing',
    },
    {
      icon: 'Trash',
      title: 'Upgrade profile',
    },

    {
      icon: 'Trash',
      title: 'Setting',
    },
  ]

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  function _renderItem({ item, index }) {
    return (
      <LisView key={item?.icon} onPress={() => alert('k')}>
        <View style={styles?.listView}>
          <SvgIcon name={item?.icon} size={'20'} />
          <Text style={[styles.text, { color: item?.color && item?.color }]}>
            {item?.title}
          </Text>

          {index == 1 && (
            <View style={styles.menu}>
              <View style={styles.notification}>
                <Text style={styles.notificationtext}>12</Text>
              </View>
            </View>
          )}
        </View>
      </LisView>
    )
  }

  return (
    <View style={{ backgroundColor: Colors?.white, flex: 1, paddingHorizontal:15 }}>
      
  
      <Navigantion header={'My Profile'}/>

        <View style={styles.view1parent}>
          <View>
            <Image
              source={profileimg?.user}
              style={{ height: 95, width: 95 }}
            />
            <View style={styles.Mentorarc2}>
              <SvgIcon name={'Mentorarc'} width={'31px'} height={'27px'} />
            </View>
          </View>
          <Text style={styles.mentorname}>Radha krishna</Text>
          <Text style={styles.mentorname2}>Family Head</Text>
        </View>
   
      <View>
        <Text style={styles.infotextheader}>PERSONAL INFORMATION</Text>
        <View style={styles.infomailview}>
          <SvgIcon name={'Mentorarc'} width={'24px'} height={'24px'} />

          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text style={styles.infotext1}>Email id</Text>
            <Text style={styles.infotext2}>username@gmail.com</Text>
          </View>
        </View>

        <View style={[styles.infomailview, styles.margin]}>
          <SvgIcon name={'Mentorarc'} width={'24px'} height={'24px'} />

          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text style={styles.infotext1}>Email id</Text>
            <Text style={styles.infotext2}>username@gmail.com</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={listArr}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.key}
      />
    </View>
  )
}
