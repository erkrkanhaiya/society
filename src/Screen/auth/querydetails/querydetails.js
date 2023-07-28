import React from 'react'
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import { styles } from './querydetailscss'
import _Button from '@/Components/common/_button/_button'
import ViewButton from '@/Components/common/viewall/viewall'
import Maincard from '@/Components/common/maincard/maincard'
import Bigcard from '@/Components/common/bigcard/bigcard'
// import VideoPlayer from 'react-native-video-player'
const data = [
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer1,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer2,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer3,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer4,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer1,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer2,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer3,
  },
  {
    name: 'Mukesh Kumar',
    image: newlisting.customer4,
  },
]

const featurePropData = [
  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',
    image: newlisting.test7,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test5,
    amenities: ['Water', 'Electricity', 'Wi-fi'],
  },
]

function featurePropRender({ item, index }) {
  return (
    <Bigcard
      key={index}
      index={index}
      item_catogery={item.item_catogery}
      image={item.image}
      item_type={item.item_type}
      title={item.title}
      address={item.address}
      amenities={item.amenities}
      verified={true}
    />
  )
}

export default function Querydetails() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          Vertical
          data={featurePropData}
          renderItem={featurePropRender}
        />
      </View>
      <View
        style={{
          width: '100%',
          borderColor: '#E9E9E9',
          borderWidth: 0.5,
          
        }}
      ></View>
      <Text style={styles.Text}>Request customer</Text>
      {data.map((i, index) => {
        return (
          <View
            key={index}
            style={{
              borderBottomColor: '#E9E9E9',
              borderBottomWidth: 1,
              
            }}
          >
            <View style={styles.profile}>
              <View style={styles.profilechild}>
                <View style={styles.view1parent}>
                  <Image source={i.image} style={{ height: 60, width: 60 }} />
                </View>
                <View style={styles.mainviewchild}>
                  <View style={styles.textparent}>
                    <Text style={styles.textchild}>{i.name}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: 145,
                    }}
                  >
                    <Text style={styles.textchild2}>
                      suresh kumar intented in your property
                    </Text>
                  </View>
                  <View style={styles.time}>
                    <SvgIcon name={'Clock'} width={'16px'} height={'16px'} />
                    <Text style={styles.timetext}>
                      16 March. 2023 - 11:20 pm
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.contact}>
                  <Text
                    style={{
                      color: 'white',
                    }}
                  >
                    Contact
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}
