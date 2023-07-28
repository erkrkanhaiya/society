import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import React, { useState } from 'react'
import { styles } from './advancesearchcss'
import RNPickerSelect from 'react-native-picker-select'
import { SvgIcon } from '@/Assets/Images/property'
import { color } from 'react-native-reanimated'
// import Slider from '@react-native-community/slider'
import RangeSlider from '@jesster2k10/react-native-range-slider'

export default function Advancesearch() {
  const [sliderValue, setSliderValue] = useState(0)
  const [sliderValue2, setSliderValue2] = useState(50)
  // const onChange = (min, max) => {
  //   console.log('min: ', min)
  //   console.log('max: ', max)
  // }
  const [valueText, setValueText] = useState(50)
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainview}>
      <View style={styles.back}>
        <SvgIcon name={'Back'} size={'20'} />
        <Text style={styles.navtext}>Find Your Property</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 18,
          borderRadius: 9,
          marginVertical: 30,
          paddingBottom: 30,
        }}
      >
        <View style={styles.location}>
          <View style={styles.locationchild}>
            <Text style={styles.locationchildtext}>
              What are you looking for
            </Text>
          </View>
          <View style={styles.iconstyle}>
            <SvgIcon name={'Search'} size={'18'} />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerchild}>Select Property type</Text>
          <View style={styles.viewchild}>
            <View style={styles.viewchild2}>
              <SvgIcon
                name={'select1'}
                width={'18px'}
                height={'18px'}
                paddingTop={17}
              />
              <RNPickerSelect
                style={{
                  placeholder: {
                    color: '#747474',
                    fontSize: 15,
                    fontWeight: '500',
                    marginLeft: 10,
                  },
                  viewContainer: {
                    marginLeft: 15,
                    flex: 0.95,
                    justifyContent: 'center',
                  },
                }}
                onValueChange={value => console.log(value)}
                items={[
                  { label: 'Football', value: 'football' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Hockey', value: 'hockey' },
                ]}
              />
            </View>
            <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
          </View>
        </View>

        <Text style={styles.Pricerange}>Price Range</Text>
        <View
          style={{
            flexDirection: 'row',
          }}
        ></View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <Text style={styles.Pricetext}> Rs. {sliderValue} - </Text>
            <Text style={styles.Pricetext}> Rs. {sliderValue2}</Text>
          </View>

          
          <RangeSlider
            type="range"
            selectionColor={'#01A449'}
            min={100000}
            max={500000}
            tintColor={'#01A449'}
            handleBorderWidth={1}
            handleBorderColor="#01A449"
            handleColor={'#01A449'}
            tintColorBetweenHandles="#01A449"
            selectedMinimum={200000}
            selectedMaximum={300000}
            style={{
              flex: 1,
              height: 70,
            }}
            onChange={(data, data2) => {
              setSliderValue(data)
              setSliderValue2(data2)
            }}
          />
          {/* <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor="#01A449"
            maximumTrackTintColor="#01A449"
            thumbTintColor="#01A449"
            onValueChange={setValueText}
          
          step={10}
         
          />
           <Text>{valueText} </Text> */}
        </View>

        <Text style={styles.containerchild2}>Select Property Categories</Text>
        <View style={styles.viewchild}>
          <View style={styles.viewchild2}>
            <SvgIcon
              name={'select1'}
              width={'22px'}
              height={'22px'}
              paddingTop={17}
            />
            <RNPickerSelect
              style={{
                placeholder: {
                  color: '#747474',
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                },
                viewContainer: {
                  marginLeft: 15,
                  flex: 0.95,
                  justifyContent: 'center',
                },
              }}
              onValueChange={value => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </View>
          <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
        </View>

        <Text style={styles.containerchild2}>All Cities</Text>
        <View style={styles.viewchild}>
          <View style={styles.viewchild2}>
            <SvgIcon
              name={'select3'}
              width={'23px'}
              height={'23px'}
              paddingTop={17}
            />
            <RNPickerSelect
              style={{
                placeholder: {
                  color: '#747474',
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                },
                viewContainer: {
                  marginLeft: 15,
                  flex: 0.95,
                  justifyContent: 'center',
                },
              }}
              onValueChange={value => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </View>
          <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
        </View>

        <Text style={styles.containerchild2}>Amenities</Text>
        <View style={styles.viewchild}>
          <View style={styles.viewchild2}>
            <SvgIcon
              name={'select2'}
              width={'23px'}
              height={'23px'}
              paddingTop={17}
            />
            <RNPickerSelect
              style={{
                placeholder: {
                  color: '#747474',
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                },
                viewContainer: {
                  marginLeft: 15,
                  flex: 0.95,
                  justifyContent: 'center',
                },
              }}
              onValueChange={value => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </View>
          <SvgIcon name={'Down'} width={'15px'} height={'15px'} />
        </View>
        <TouchableOpacity style={styles.button}>
          <SvgIcon name={'Srch'} width={'18px'} height={'18px'} />
          <Text style={styles.buttontext}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
