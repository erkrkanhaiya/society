import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { styles, Viewmenu } from './smallcardcss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'

export default function Smallcard(props) {
  return (
 
      <View key={props.index} style={styles.newlistingparent}>
        <View style={styles.newlisting}>
          <View style={styles.renttype}>
            <Text style={styles.renttext}>{props.item_catogery}</Text>
          </View>
          <View style={styles.renttype2}>
            <Text style={styles.renttext2}>{props.item_type}</Text>
          </View>
          <TouchableOpacity style={styles.newlistingicon}>
            <SvgIcon name={'Qr'} size={'8'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.newlistingicon2}>
            <SvgIcon name={'Heart'} size={'8'} />
          </TouchableOpacity>
          <Image source={props?.image} style={{ height: 95, width: 149 }} />
         {props.verified && <View style={styles.verified}>
            <SvgIcon name={'Verified'} width={'16px'} height={'16px'} />
          </View>}
        </View>
        <View style={styles.listviewparent}>
          <Text style={styles.heading}>{props.title}</Text>
          <View style={styles.disbox}>
            <SvgIcon name={'Location2'} width={'10px'} height={'10px'} />
            <Text style={styles.discriptipon}>{props.address}</Text>
          </View>
          <View style={styles.amenities}>
            {props.amenities?.includes('Water') && (
              <View style={styles.amenitiechild}>
                <Image
                  source={newlisting.test5}
                  style={{ height: 8, width: 8 }}
                />
                <Text
                  style={{
                    fontSize: 6,
                    lineHeight: 9,
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
                  style={{ height: 8, width: 8 }}
                />
                <Text
                  style={{
                    fontSize: 6,
                    lineHeight: 9,
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
                  style={{ height: 8, width: 8 }}
                />
                <Text
                  style={{
                    fontSize: 6,
                    lineHeight: 9,
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
          <View style={styles.contactparent1}>
            <TouchableOpacity style={styles.contactparent2}>
              <SvgIcon name={'Phon'} width={'15px'} height={'15px'} />
              <Text style={styles.contact}>{'Contact'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      
    
  )
}
