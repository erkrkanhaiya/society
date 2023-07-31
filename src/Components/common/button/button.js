import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from '@/Assets/Images/property'

export default function Gbutton(props) {
  return (
    <Buttonview onPress={props?.onClick}>
      <Textstyle>{props.texttitle} </Textstyle>
      { props.icon && <View style={{
        marginLeft:15
      }}>
      <SvgIcon name={'right'} size={'17'} />
      </View>}
    </Buttonview>
  )
}
const Buttonview = styled(TouchableOpacity)`
  background-color: #45A5B6;
  font-weight: 800;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 6px;
flex-direction:row;

`
const Textstyle = styled(Text)`
  color: white;
  text-align: center;
  opacity: 0.5;
  font-size: 22px;
  font-weight: 500;
  opacity: 1;
`
