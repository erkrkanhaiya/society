import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { ProfileCard, styles, LisView } from './profilecss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'

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

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

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
    <View style={{ backgroundColor: Colors?.screenbackground, flex: 1 }}>
      <View style={{ marginHorizontal: 15 }}>
        <ProfileCard>
          <View style={styles.mentorchild}>
            <View style={styles.view1parent}>
              <Image
                source={profileimg?.user}
                style={{ height: 95, width: 95 }}
              />
              <View style={styles.Mentorarc2}>
                <SvgIcon name={'Mentorarc'} width={'31px'} height={'27px'} />
              </View>
            </View>
            <View style={styles.qr2parent}>
              <View style={styles.qr2}>
                <SvgIcon name={'Qr2'} width={'24px'} height={'24px'} />
              </View>
              <View style={styles.shareiconview}>
                <Text style={styles.qrtext}>Share</Text>
                <SvgIcon name={'Share'} width={'12px'} height={'12px'} />
              </View>
            </View>

            <Text style={styles.mentorname}>Jonathan</Text>
            <Text style={styles.mentorname2}>Lonine ntho</Text>
          </View>

          <View style={{ marginHorizontal: 25, marginTop: 20 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{ flexDirection: 'row', flex: 5, alignItems: 'center' }}
              >
                <SvgIcon name={'vector'} size={'20'} />
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    fontSize: 16,
                    marginLeft: 10,
                  }}
                >
                  dinesh@gmail.com
                </Text>
              </View>

              <View
                style={{ marginRight: 15, flex: 1, justifyContent: 'center' }}
              >
                {/* <Text>starverified</Text> */}
                <SvgIcon name={'starverified'} size={'20'} />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <View
                style={{ flexDirection: 'row', flex: 5, alignItems: 'center' }}
              >
                <SvgIcon name={'Mobile'} size={'20'} />
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    fontSize: 16,
                    marginLeft: 10,
                  }}
                >
                  +91 9079660508
                </Text>
              </View>

              <View
                style={{ marginRight: 15, flex: 1, justifyContent: 'center' }}
              >
                <SvgIcon name={'starverified'} size={'20'} />
              </View>
            </View>
          </View>

          <_Button buttontext={'Edit Profile'} />
        </ProfileCard>

        <FlatList
          data={listArr}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  )
}
