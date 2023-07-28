import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './newlisting2css'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import Maincard from '@/Components/common/maincard/maincard'
import Newcard from '@/Components/common/newcard/newcard'
import Smallcard from '@/Components/common/card/smallcard'

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
    image: newlisting.newlist2,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test3,
    amenities: ['Water', 'Electricity'],
    pricetype: 'Negotiable',
    verified: false,
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
  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',
    image: newlisting.newlist2,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test3,
    amenities: ['Water', 'Electricity'],
    pricetype: 'Negotiable',
    verified: false,
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
  {
    title: 'Hunting Properties',
    address: 'Hondo, TX, 78861, Medina',
    image: newlisting.newlist1,
    item_type: 'Lease', // Rent, lease, sale, Rent/lease
    item_catogery: 'commercial',
    icon: newlisting.test3,
    amenities: ['Water', 'Electricity'],
    pricetype: 'Negotiable',
    verified: true,
  },
]


export default function Newlisting2() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.newlistingview}
    >
      <View style={styles.topicon}>
        <View style={styles.icon1}>
          <SvgIcon name={'icon1'} size={'18'} />
        </View>
        <View style={styles.icon2}>
          <SvgIcon name={'icon2'} size={'18'} />
        </View>
        <View style={styles.icon3}>
          <SvgIcon name={'icon3'} size={'18'} />
          <View style={styles.icon4}>
            <Text style={styles.icon4child}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.Portfolio}>
        <View style={styles.Portfoliochild}>
          <Text style={styles.Portfoliotext}>New Listing Property</Text>
          <View style={styles.filterparent}>
            <View style={styles.filter}>
              <SvgIcon name={'Filter'} width={'20px'} height={'20px'} />
            </View>
            <Text style={styles.Portfoliotext2}>Short by</Text>
          </View>
        </View>
      </View>
      <View style={styles.listview}>
        {newlistingData.map((i, index) => {
          return (
            <Smallcard
      key={index}
      index={index}
      item_catogery={i.item_catogery}
      image={i.image}
      item_type={i. item_type}
      title={i.title}
      address={i.address}
      amenities={i.amenities}
      pricetype={i.pricetype}
      verified={i.verified}
    />
          )
        })}
      </View>
    </ScrollView>
  )
}
