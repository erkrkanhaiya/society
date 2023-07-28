import React from 'react'
import { Text, View, FlatList, ScrollView, TextInput } from 'react-native'
import { styles, Viewmenu } from './searchresultcss'
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
export default function Searchresult() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.newlistingview}
    >
      <View style={styles.profile}>
        <View style={styles.profilechild}>
          <View style={styles.view1parent}>
            <SvgIcon name={'user'} width={'65px'} height={'65px'} />
            <View style={styles.Profilearc}>
              <SvgIcon name={'Profilearc'} width={'18px'} height={'18px'} />
            </View>
          </View>
          <View style={styles.mainviewchild}>
            <Text style={styles.textparent}>
              Hi,
              <Text style={styles.textchild}>Jonathan</Text>
            </Text>
            <View style={styles.view2}>
              <Text style={styles.textchild2}>Add Property</Text>

              <View style={styles.viewparent}>
                <Text style={styles.textchild3}>Free</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
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
      </View>

      <Text style={styles.text}>Explore your Need as</Text>
      <View style={styles.location}>
        <View style={styles.locationchild}>
          <TextInput
            style={{
              paddingLeft: 10,
              flex: 0.75,
            }}
            placeholder="TEXT"
          />
          {/* <Text style={styles.locationchildtext}>
            1150 Bunker Hill Rd. Houstona
          </Text> */}
        </View>
        <View style={styles.iconstyle}>
          <SvgIcon name={'Search'} size={'20'} />
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
