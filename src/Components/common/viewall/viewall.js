import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import React from 'react'
import { SvgIcon, profileimg } from '@/Assets/Images/property'

export default function Addsection(props) {
  return (
    <Buttonparent>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 9999,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F8F8FC',
          }}
        >
          <SvgIcon name={props.icon} size={'35'} />
        </View>

        <Viewalltext>{props.Viewalltext}</Viewalltext>
      </View>
      {props.Buttontext && (
        <Viewallchild>
          <SvgIcon name={'addicon2'} size={'18'} />

          <Viewalltext2>{props.addtext}</Viewalltext2>
        </Viewallchild>
      )}
    </Buttonparent>
  )
}
const Buttonparent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 15px;
`
const Viewalltext = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
  color: #3e3c3c;
  font-family: 'Poppins-Regular';
`
const Viewallchild = styled(View)`
  padding: 5px;
  height: 35px;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #349eb0;
`
const Viewalltext2 = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  color: #ffffff;
  font-family: 'Poppins-Regular';
`
