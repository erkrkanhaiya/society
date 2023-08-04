import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { ProfileCard, styles, LisView } from './profilecss'
import { SvgIcon, profileimg } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import FullScreenChz from 'react-native-fullscreen-chz'
import { Styles } from '@/Styles/Styled-Components'
import Navigantion from '@/Components/common/navigation/navigantion'
import Addsection from '@/Components/common/viewall/viewall'

export default function Profile() {
  const listArr = [
    {
      icon: 'Promem1',
      title: 'Mukesh',
      title2: 'Brother',
    },
    {
      icon: 'Promem4',
      title: 'Raja ram',
      title2: 'Father',
    },
    {
      icon: 'Promem3',
      title: 'Seema',
      title2: 'Seema',
    },
    {
      icon: 'Promem4',
      title: 'Beem',
      title2: 'Brother',
    },
  ]

  const listArr2 = [
    {
      icon: 'vih1',
      title: 'Four wheeler',
      title2: 'RJ.14- PS-5898',
    },
    {
      icon: 'vih2',
      title: 'Two wheeler',
      title2: 'RJ.20- PS-5598',
    },
    {
      icon: 'vih1',
      title: 'Four wheeler',
      title2: 'RJ.14- PS-5898',
    },
  ]
  const listArr3 = [
    {
      icon: 'vistor1',
      title: 'Ramesh',
      title2: 'driver',
    },
    {
      icon: 'vistor2',
      title: 'sunil',
      title2: 'Swiper',
    },
    {
      icon: 'vistor3',
      title: 'neetin',
      title2: 'Milk men',
    },
    {
      icon: 'vistor4',
      title: 'Kumar shar',
      title2: 'technician',
    },
  ]

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  function _renderItem({ item, index }) {
    return (
      <View style={[styles?.listView, styles.marginbottom]}>
        <SvgIcon name={item?.icon} size={'60'} />
        <Text style={[styles.text]}>{item?.title}</Text>
        <Text style={[styles.text2]}>{item?.title2}</Text>
      </View>
    )
  }

  function _renderItem2({ item, index }) {
    return (
      <View style={[styles?.listView2, styles.marginbottom]}>
        <SvgIcon name={item?.icon} size={'60'} />
        <Text style={[styles.text]}>{item?.title}</Text>
        <Text style={[styles.text3]}>{item?.title2}</Text>
      </View>
    )
  }
  function _renderItem3({ item, index }) {
    return (
      <View style={[styles?.listView, styles.marginbottom]}>
        <SvgIcon name={item?.icon} size={'60'} />
        <Text style={[styles.text]}>{item?.title}</Text>
        <Text style={[styles.text2]}>{item?.title2}</Text>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: Colors?.white, flex: 1 }}>
      {/* <ProfileCard> */}
      <View
        style={{
          backgroundColor: '#349EB0',
          paddingHorizontal: 15,
        }}
      >
        <Navigantion header={'My Profile'} color={'white'} icon={'true'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: Colors?.white,

            backgroundColor: '#349EB0',
            paddingHorizontal: 15,
            paddingBottom: 20,
          }}
        >
          <View style={styles.view1parent}>
            <View style={styles.view1parentchild}>
              <View>
                <SvgIcon name={'Promem1'} size="75" />

                <View style={styles.Mentorarc2}>
                  <SvgIcon name={'camera'} size="16" />
                </View>
              </View>
              <View
                style={{
                  marginLeft: 15,
                }}
              >
                <Text style={styles.name}>Dinesh Kumar</Text>
                <Text style={styles.number}>+91 *****08</Text>
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View style={styles.penmarkview}>
                <SvgIcon name={'pencil'} width={'20px'} height={'20px'} />
              </View>
              <Text style={styles.editprofile}>Edit Profile</Text>
            </View>
          </View>

          <View style={[styles.view1parent, styles.margin]}>
            <View style={styles.view1parentchild}>
              <View style={[styles.penmarkview, styles.marginLeft]}>
                <SvgIcon name={'resident'} width={'20px'} height={'20px'} />
              </View>
              <View>
                <Text style={styles.place}>My Residents</Text>
              </View>
            </View>

            <View style={styles.addview}>
              <SvgIcon name={'addicon'} size="18" />
              <Text style={styles.addtext}>Add</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomborder}>
          <Addsection
            Viewalltext={'Family Member'}
            Buttontext={true}
            icon={'family'}
            addtext={'Add Member'}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={listArr}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item.key}
          />
        </View>
        <View style={styles.bottomborder}>
          <Addsection
            Viewalltext={'My vehicle '}
            Buttontext={true}
            icon={'democar'}
            addtext={'Add Vehicle'}
          />

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={listArr2}
            renderItem={_renderItem2}
            keyExtractor={(item, index) => item.key}
          />
        </View>
        <View style={styles.bottomborder}>
          <Addsection
            Viewalltext={'my visitor '}
            Buttontext={true}
            icon={'democard'}
            addtext={'Add Visitor'}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={listArr3}
            renderItem={_renderItem3}
            keyExtractor={(item, index) => item.key}
          />
        </View>
      </ScrollView>
    </View>
  )
}
