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
import { styles } from './propertydetailcss'
import _Button from '@/Components/common/_button/_button'
import ViewButton from '@/Components/common/viewall/viewall'
import Maincard from '@/Components/common/maincard/maincard'
// import VideoPlayer from 'react-native-video-player'

const details = [
  {
    text1: 'avilable',
    text2: 'Hondo, TX 78861 (Medina County)',
  },
  {
    text1: 'Size',
    text2: '4 Acres',
  },
  {
    text1: 'Type',
    text2: 'Commercial Property',
  },
  {
    text1: 'Property',
    text2: 'Property for lease',
  },
  {
    text1: 'Price',
    text2: 'Rs. 650,000 (Par Year)',
  },
  {
    text1: 'Location ',
    text2: 'Hondo, TX, 78861, Medina ',
  },
]

const landCategoryData = [
  {
    title: 'Hunting Properties',
    title2: '13,877 Hunting Properties',
    image: newlisting.newlist1,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: newlisting.newlist1,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: newlisting.newlist1,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: newlisting.newlist1,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: newlisting.newlist1,
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
    <Maincard
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
function landCategoryRender({ item }) {
  return (
    <View style={styles.titleparent}>
      <Image source={item?.image} style={{ height: 200, width: 280 }} />
    </View>
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
        <View style={{
            backgroundColor:"white"
        }}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={landCategoryData}
          renderItem={landCategoryRender}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 15,
        }}
      >
        <View style={styles.headerparent}>
          <Text style={styles.header}>18.71 Acres • Rs. 650,000</Text>
          <View style={styles.newlistingparent}>
            <TouchableOpacity style={styles.newlistingicon}>
              <SvgIcon name={'Heart'} size={'18'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.newlistingicon2}>
              <SvgIcon name={'Qr'} size={'18'} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.discription}>Agricultural/Farm Land for Lease</Text>

        <View style={styles.amenities}>
          <View style={styles.amenitiechild}>
            <Image
              source={newlisting.test5}
              style={{ height: 10, width: 10 }}
            />
            <Text
              style={{
                fontSize: 8,
                lineHeight: 12,
                marginLeft: 5,
              }}
            >
              Water
            </Text>
          </View>

          <View style={styles.amenitiechild}>
            <Image
              source={newlisting.test3}
              style={{ height: 10, width: 10 }}
            />
            <Text
              style={{
                fontSize: 10,
                lineHeight: 12,
                marginLeft: 5,
              }}
            >
              Wi-fi
            </Text>
          </View>

          <View style={styles.amenitiechild}>
            <Image
              source={newlisting.test4}
              style={{ height: 10, width: 10 }}
            />
            <Text
              style={{
                fontSize: 10,
                lineHeight: 12,
                marginLeft: 5,
              }}
            >
              Electricity
            </Text>
          </View>
        </View>

        {details.map((i, index) => {
          return (
            <View style={styles.details}>
              <Text style={styles.detailstext}>{i.text1}</Text>

              <Text style={styles.detailstext2}>{i.text2}</Text>
            </View>
          )
        })}
        <Text style={styles.discription2}>
          Land Sale: 4 to 10+ Acres in Prime Hill Country Location - Just
          Minutes South of Bandera, the Cowboy Capital of the World! Ask About
          Savings Incentives!
        </Text>
        <Text style={[styles.discription2, styles.margin]}>
          With gorgeous grand oak trees and spectacular 40-mile Hill Country
          views, Valley Oaks Ranch is the private country hideaway you've been
          hoping to find for your weekend getaway spot, retirement retreat, or
          new primary residence - perfect for your Hill Country barndominium!
          Valley Oaks Ranch has all the
        </Text>
      </View>
      {/* <VideoPlayer
        video={{
          uri: 'https://www.youtube.com/watch?v=yVTNge3sXpg&ab_channel=BeerBiceps',
        }}
        videoWidth={500}
        videoHeight={500}
        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
      /> */}

      <View style={styles.profile}>
        <View style={styles.profilechild}>
          <View style={styles.view1parent}>
            <SvgIcon name={'user'} width={'65px'} height={'65px'} />
          </View>
          <View style={styles.mainviewchild}>
            <Text style={styles.textparent}>
              <Text style={styles.textchild}>Jonathan marks </Text>
            </Text>

            <Text style={styles.textchild2}>India</Text>
            <View style={styles.mobile}>
              <SvgIcon name={'Mobile2'} size={'18'} />
              <Text style={styles.mobileno}>+91 98578XXXXX</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.icon1}>
            <SvgIcon name={'Trusted'} size={'70'} />
          </View>
        </View>
      </View>
      <_Button buttontext={'Contact Seller'} />
      </View>
      <ViewButton Viewalltext={'Similar Properties'} Buttontext={'View all'} />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={featurePropData}
          renderItem={featurePropRender}
        />
      </View>
    </ScrollView>
  )
}
