import React from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import { styles, Viewmenu } from './nearbypropertycss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import Maincard from '@/Components/common/maincard/maincard'
import Newcard from '@/Components/common/newcard/newcard'
const newlistingData = [
  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',

    image: newlisting.newlist1,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test5,
    amenities: ['Water', 'Electricity', 'Wi-fi'],
    pricetype: 'Negotiable',
    verified: true,
  },
  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',

    image: newlisting.newlist2,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test4,
    amenities: ['Water', 'Electricity', 'Wi-fi'],
    pricetype: 'Negotiable',
    verified: true,
  },

  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',
    image: newlisting.newlist3,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test3,
    amenities: ['Water', 'Electricity'],
    pricetype: 'Negotiable',
    verified: false,
  },
]

function newlistingRender({ item, index }) {
  return (
    <Newcard
      key={index}
      index={index}
      item_catogery={item.item_catogery}
      image={item.image}
      item_type={item.item_type}
      title={item.title}
      address={item.address}
      amenities={item.amenities}
      pricetype={item.pricetype}
      verified={item.verified}
    />
  )
}
export default function Nearbyproperty() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.newlistingview}
    >
      <Text style={styles.text}>Nearby Property for lease</Text>
      <View style={styles.location}>
        <View style={styles.locationchild}>
          <SvgIcon name={'Location2'} size={'25'} />
          <Text style={styles.locationchildtext}>
            1150 Bunker Hill Rd. Houstona
          </Text>
        </View>
        <View style={styles.iconstyle}>
          <SvgIcon name={'Location'} size={'22'} />
        </View>
      </View>

      <View style={styles.Portfolio}>
        <View style={styles.Portfoliochild}>
          <View style={styles.filterparent}></View>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={newlistingData}
          renderItem={newlistingRender}
        />
      </View>
    </ScrollView>
  )
}
