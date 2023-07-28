import React from 'react'
import { FlatList, ScrollView, Text, View, Image } from 'react-native'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import { styles } from './searchcss'
import ViewButton from '@/Components/common/viewall/viewall'

const menutext = ['Commercial', 'PG/Co-Living', 'Plots', 'Lands']

const locatedPropertyData = [
  {
    title: 'Jaipur',
    title2: '100 Properties',
    image: PngIcon2.test1,
  },
  {
    title: 'Delhi',
    title2: '20 Properties',
    image: PngIcon2.test2,
  },
  {
    title: 'Jaipur',
    title2: '100 Properties',
    image: PngIcon2.test1,
  },
  {
    title: 'Delhi',
    title2: '20 Properties',
    image: PngIcon2.test2,
  },
]

function locatedPropertyRender({ item }) {
  return (
    <View style={styles.titleparent}>
      <Image source={item?.image} style={{ height: 70, width: 70 }} />
      <View style={styles.locatedPropertyParent}>
        <Text style={styles.locatedPropertytext}>{item?.title}</Text>
        <Text style={styles.locatedPropertytext2}>{item?.title2}</Text>
      </View>
    </View>
  )
}

const landCategoryData = [
  {
    title: 'Hunting Properties',
    title2: '13,877 Hunting Properties',
    image: PngIcon.test1,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: PngIcon.test2,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: PngIcon.test1,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: PngIcon.test2,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: PngIcon.test1,
  },
]
function landCategoryRender({ item }) {
  return (
    <View style={styles.titleparent}>
      <View style={styles.titleparent2}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.title2}>{item?.title2}</Text>
      </View>
      <Image source={item?.image} style={{ height: 135, width: 135 }} />
    </View>
  )
}

const mentorData = [
  {
    title: 'Hunting Properties',
    title2: '13,877 Hunting Properties',
    image: PngIcon2.test2,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: PngIcon2.test1,
  },
  {
    title: 'Hunting Properties',
    title2: '13,877 Hunting Properties',
    image: PngIcon2.test2,
  },
  {
    title: 'Farms for sale ',
    title2: '20,256 Farms for sale',
    image: PngIcon2.test1,
  },
]

function mentorRender({ item }) {
  return (
    <View style={styles.mentor}>
      <View style={styles.mentorchild}>
        <View style={styles.view1parent}>
          <SvgIcon name={'Mentor1'} width={'60px'} height={'60px'} />
          <View style={styles.Mentorarc2}>
            <SvgIcon name={'Mentorarc'} width={'29px'} height={'25px'} />
          </View>
        </View>

        <Text style={styles.mentorname}>Ram Charan</Text>
        <Text style={styles.mentorname2}>Rajasthan</Text>
      </View>
      <View style={styles.mentorchild2}>
        <View style={styles.mentorview1}>
          <Text style={styles.mentortext}>6 years</Text>
          <Text style={styles.mentortext2}>Experience</Text>
        </View>
        <View
          style={{
            height: 30,
            borderWidth: 1,
            borderColor: '#E9E9E9',
          }}
        />
        <View style={styles.mentorview1}>
          <Text style={styles.mentortext}>25</Text>
          <Text style={styles.mentortext2}>Properties</Text>
        </View>
      </View>
    </View>
  )
}

const servicedata = [
  {
    title2: 'Pay on Credit',
    image: newlisting.service2,
  },
  {
    title: 'Farms for sale ',
    title2: 'Agreement',
    image: newlisting.service1,
  },
  
  {
    title2: 'Loan',
    image: newlisting.service3,
  },
]
export default function Search() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.newlistingview}
    >
      <View style={styles.menuview}>
        {menutext.map((i, index) => {
          return (
            <Text
              style={{
                fontSize: 12,
                color: '#646161',
                fontFamily: 'Poppins-Regular',
              }}
              key={index}
            >
              {i}
            </Text>
          )
        })}
      </View>
      <View style={styles.location}>
        <View style={styles.locationchild}>
          <View style={styles.iconstyle}>
            <SvgIcon name={'Search'} size={'20'} />
          </View>
        </View>
        <View style={styles.searchview}>
          <Text style={styles.searchviewtext}>Search</Text>
        </View>
      </View>
      <ViewButton Viewalltext={'Add-on Service'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent:"space-between"
        }}
      >
        {servicedata.map((i, index) => {
          return (
            <View key={index} style={styles.service}>
              <Image source={i?.image} style={{ height: 40, width: 40 }} />
              <View style={styles.locatedPropertyParent}>
                <Text style={styles.locatedPropertytext2}>{i?.title2}</Text>
              </View>
            </View>
          )
        })}
      </View>

      <ViewButton Viewalltext={'Top Localities'} Buttontext={'View all'} />

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={locatedPropertyData}
          renderItem={locatedPropertyRender}
        />
      </View>

      <ViewButton
        Viewalltext={'Featured Collections'}
        Buttontext={'View all'}
      />

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={landCategoryData}
          renderItem={landCategoryRender}
        />
      </View>

      <ViewButton Viewalltext={'Our Mentor'} />

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={mentorData}
          renderItem={mentorRender}
        />
      </View>
    </ScrollView>
  )
}
