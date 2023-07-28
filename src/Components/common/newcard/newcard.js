import {
  View,
  Text,
  SafeAreaView,
  AppRegistry,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import Swiper from 'react-native-swiper'
import React from 'react'
import { styles, Viewmenu } from './newcardcss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
export default function Newcard(props) {
  return (
    <View style={styles.newlistingparent}>
      <View style={styles.newlisting}>
        <View style={styles.renttype}>
          <Text style={styles.renttext}>{props.item_catogery}</Text>
        </View>
        <View style={styles.renttype2}>
          <Text style={styles.renttext2}>{props.item_type}</Text>
        </View>
        <TouchableOpacity style={styles.newlistingicon}>
          <SvgIcon name={'Qr'} size={'18'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newlistingicon2}>
          <SvgIcon name={'Heart'} size={'18'} />
        </TouchableOpacity>
        <Image
          source={props?.image}
          style={{ height: 200, width: '100%', borderRadius: 8 }}
        />
        {props.verified && (
          <View style={styles.verified}>
            <SvgIcon name={'Verified'} width={'30px'} height={'30px'} />
          </View>
        )}
      </View>
      <View style={styles.listviewparent}>
        <View style={styles.listviewchild}>
          <Text style={styles.heading}>{props.title}</Text>
          {props.pricetype && (
            <Text style={styles.pricetype}>{props.pricetype}</Text>
          )}
        </View>
        <View style={styles.disbox}>
          <SvgIcon name={'Location2'} width={'16px'} height={'16px'} />
          <Text style={styles.discriptipon}>{props.address}</Text>
        </View>

        <View style={styles.amenities}>
          {props.amenities?.includes('Water') && (
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
          )}
          {props.amenities?.includes('Wi-fi') && (
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
          )}
          {props.amenities?.includes('Electricity') && (
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
          )}
        </View>

        <View style={styles.profilechild2}>
          <View style={styles.view1parent}>
            <SvgIcon name={'user'} width={'48px'} height={'48px'} />

            <View style={styles.Mentorarc}>
              <SvgIcon name={'Mentorarc'} width={'18px'} height={'18px'} />
            </View>
          </View>
          <View style={styles.mainviewchild}>
            <Text style={styles.textparent}>Jonathan marks</Text>
            <Text style={styles.textchild2}>India</Text>
          </View>
        </View>
      </View>
      <View style={styles.contactparent1}>
        <TouchableOpacity style={styles.contactparent2}>
          <SvgIcon name={'Phon'} width={'20px'} height={'20px'} />
          <Text style={styles.contact}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
