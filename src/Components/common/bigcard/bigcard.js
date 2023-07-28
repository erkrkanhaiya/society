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
import { styles, Viewmenu } from './bigcardcss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
export default function Bigcard(props) {
  return (
    <View style={styles.newlistingparent}>
      <View style={styles.newlisting}>
        <TouchableOpacity style={styles.newlistingicon}>
          <SvgIcon name={'Qr'} size={'18'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newlistingicon2}>
          <SvgIcon name={'Heart'} size={'18'} />
        </TouchableOpacity>
        <Image source={props?.image} style={{ height: 200, width: 310 }} />
        <View style={styles.verified}>
          <SvgIcon name={'Verified'} width={'30px'} height={'30px'} />
        </View>
      </View>
      <View style={styles.listviewparent}>
        <Text style={styles.discriptipon}>25.43 Acres | Rs.25000/Month</Text>

        <Text style={styles.heading}>{props.title}</Text>
        <Text style={styles.discriptipon2}>
          Square feet commercial / industrial land available for warehouse/
          Automobile Work shop and showroom, Warehouse
        </Text>

        {props.verified && (
          <View
            style={{
              position: 'absolute',
              right: 12,
              top: 10,
            }}
          >
            <Text style={styles.badge}>Negotiable</Text>
          </View>
        )}

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
                  fontSize: 10,
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
      </View>

      {props.contact && (
        <View >
          <View style={styles.profile}>
            <View style={styles.profilechild}>
              <View style={styles.view1parent}>
                <SvgIcon name={'user'} width={'65px'} height={'65px'} />
              </View>
              <View style={styles.mainviewchild}>
                <Text style={styles.textparent}>
                  <Text style={styles.textchild}>Jonathan marks</Text>
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.textchild2}>Jaipur (Raj.)</Text>
                  <View style={styles.icon1}>
                    <SvgIcon name={'Trusted'} size={'20'} />
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.querry}>
                <View style={styles.querrychild}>
                  <Text
                    style={{
                      color: 'white',
                    }}
                  >
                    9
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Regular',
                  }}
                >
                  Query
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.contactparent1}>
            <TouchableOpacity style={styles.contactparent2}>
              <SvgIcon name={'Call'} width={'20px'} height={'20px'} />
              <Text style={styles.contact}>Get Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}
