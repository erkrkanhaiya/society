import React from 'react'
import {  Text, View } from 'react-native'
import { styles } from './bankdetailscss'
import { SvgIcon } from '@/Assets/Images/property'

export default function Highlights(){
    return(
        <View style={styles.view2parent}>
        <Text style={styles.herdertext}>Highlights</Text>
        <View style={styles.view2}>
          <View style={styles.view1child}>
            <SvgIcon name={'Bd4'} width={'44px'} height={'44px'} />
            <Text style={styles.viewtext}>Rate of interest</Text>
            <Text style={styles.viewtext2}>8.45% - 8.9% p.a.</Text>
          </View>
          <View style={styles.view1child}>
            <SvgIcon name={'Bd1'} width={'44px'} height={'44px'} />
            <Text style={styles.viewtext}>Tenure</Text>
            <Text style={styles.viewtext2}>5 - 25 years</Text>
          </View>
          <View style={styles.view1child}>
            <SvgIcon name={'Bd3'} width={'44px'} height={'44px'} />
            <Text style={styles.viewtext}>Processing fee</Text>
            <Text style={styles.viewtext2}>Nil*</Text>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.view1child}>
            <SvgIcon name={'Bd2'} width={'44px'} height={'44px'} />
            <Text style={styles.viewtext}>Loan amount</Text>
            <Text style={styles.viewtext2}>Rs.75 lakh - Rs.10 crore</Text>
          </View>
          <View style={styles.view1child}>
            <SvgIcon name={'Bd5'} width={'44px'} height={'44px'} />
            <Text style={styles.viewtext}>Charges</Text>
            <Text style={styles.viewtext2}>Nill*</Text>
          </View>
        </View>
      </View>
    )
}