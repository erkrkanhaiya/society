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
import { styles } from './requestquerycss'
import _Button from '@/Components/common/_button/_button'
import ViewButton from '@/Components/common/viewall/viewall'
import Maincard from '@/Components/common/maincard/maincard'
import Bigcard from '@/Components/common/bigcard/bigcard'
// import VideoPlayer from 'react-native-video-player'

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
  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',
    image: newlisting.test2,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test4,
    amenities: ['Water', 'Electricity'],
  },

  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',
    image: newlisting.test2,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test3,
    amenities: 'Wi-fi',
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
      contact={true}
    />
  )
}

export default function Propertydetail() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 10,
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
    </ScrollView>
  )
}
