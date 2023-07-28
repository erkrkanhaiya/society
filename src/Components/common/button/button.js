import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'

export default function Gbutton(props) {
  return (
    <Buttonview onPress={props?.onClick}>
      <Textstyle>{props.texttitle} </Textstyle>
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


`
const Textstyle = styled(Text)`
  color: white;
  text-align: center;
  opacity: 0.5;
  font-size: 22px;
  font-weight: 500;
  opacity: 1;
`
