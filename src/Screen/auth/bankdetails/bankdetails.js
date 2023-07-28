import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './bankdetailscss'
import { SvgIcon } from '@/Assets/Images/property'
import Highlights from './highlights'
import { newlisting } from '@/Assets/Images/property'
import _Button from '@/Components/common/_button/_button'
import { Table, Row, Rows } from 'react-native-table-component'

const keydata = [
  'Home Credit facility that helps you save on interest & repay loan faster',
  'Attractive interest rates, starting from just 8% p.a.',
  'Zero penalty on part closure and foreclosure (only on variable rate loans)',
  'Zero penalty on part closure and foreclosure (only on variable rate loans)',
  'Get maximum loan against the value of the property',
  'World-class service platform with 24*7 access to loan account',
]
export default function Bankdetails() {
  const header = ['Month', 'EMI', 'Principal', 'Interest', 'Balances']
  const data = [
    ['1', '₹33038', '₹12204', '₹20833', '₹2487796'],
    ['2', '₹33038', '₹12204', '₹20833', '₹2487796'],
    ['3', '₹33038', '₹12204', '₹20833', '₹2487796'],
    ['4', '₹33038', '₹12204', '₹20833', '₹2487796'],
    ['5', '₹33038', '₹12204', '₹20833', '₹2487796'],
    ['6', '₹33038', '₹12204', '₹20833', '₹2487796'],
  ]
  return (
    <ScrollView style={styles.mainview} showsVerticalScrollIndicator={false}>
      <View style={styles.view1}>
        <Image
          source={newlisting.test8}
          style={{ height: 185, width: '100%' }}
        />
      </View>
      <Highlights />
      <View style={styles.keyviewmain}>
        <Text style={styles.keytext}>Key features of Citibank Loan</Text>
        {keydata.map((i, index) => {
          return (
            <View key={index} style={styles.keytextview}>
              <SvgIcon
                name={'Circle'}
                width={'8px'}
                height={'8px'}
                paddingTop={17}
              />
              <Text style={styles.keytext2}>{i}</Text>
            </View>
          )
        })}
      </View>
      <View style={styles.container}>
        <Text style={styles.tableviewtext}>Your Repayment Details</Text>
        <Table borderStyle={{ borderColor: '#E7E7E7', borderWidth: 1 }}>
          <Row data={header} style={styles.head} textStyle={styles.text} />
          <Rows data={data} textStyle={styles.text2} />
        </Table>
      </View>

      <View style={styles.slideview}>
        <Text style={styles.slidertext}>SIP Calculator</Text>
        <View style={styles.slideviewchild}>
          <Text style={styles.slidertext2}>Your investment</Text>
          <View style={styles.slidertext3view}>
            <Text style={styles.slidertext3}>Rs. 25000</Text>
          </View>
        </View>
        <View style={[styles.slideviewchild ,styles.margin]} >
          <Text style={styles.slidertext2}>Investment amount</Text>

          <Text style={styles.slidertext4}>₹256300</Text>
        </View>
        <View style={[styles.slideviewchild ,styles.margin2]}>
          <Text style={styles.slidertext2}> Est. returns</Text>

          <Text style={styles.slidertext4}>₹20830</Text>
        </View>
        <View style={[styles.slideviewchild ,styles.margin2]}>
          <Text style={styles.slidertext2}> Total value</Text>

          <Text style={styles.slidertext4}>₹306898</Text>
        </View>
      </View>

<_Button buttontext={"Apply Now"}/>
    </ScrollView>
  )
}
