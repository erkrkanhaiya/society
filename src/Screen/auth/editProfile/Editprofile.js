import { View, Text } from 'react-native'
import React from 'react'
import { styles, Viewmenu } from './editprofileCss'
import {
  PngIcon,
  PngIcon2,
  SvgIcon,
  newlisting,
} from '@/Assets/Images/property'
import EditprofileInputs from './components/EditprofileInputs'
import _Button from '@/Components/common/_button/_button'

export default function Editprofile() {
  return (
    <View style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <View style={styles.mentorchild}>
          <View style={styles.view1parent}>
            <SvgIcon name={'Mentor1'} width={'95px'} height={'95px'} />
            <View style={styles.Mentorarc2}>
              <SvgIcon name={'Mentorarc'} width={'31px'} height={'27px'} />
            </View>
          </View>
        </View>

        <Text style={styles.textviewchild}>Email Address</Text>
        <EditprofileInputs
          rightlabel={'Change'}
          rightIcon={'vector'}
          placeholder={'dinesh@gmail.com'}
        />

        <Text style={styles.textviewchild}>Mobile Number</Text>
        <EditprofileInputs
          rightlabel={'Unverified'}
          rightIcon={'Mobile'}
          placeholder={'9079660508'}
        />

        <_Button buttontext={'Save Update'} />
      </View>
    </View>
  )
}
