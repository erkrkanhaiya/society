import { TextInput, TouchableOpacity, Text } from 'react-native'
import { SvgIcon } from '@/Assets/Images/property'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


export default function EditprofileInputs(props) {
  const [Password, onChangePassword] = React.useState('')
  const [hidePass, setHidePass] = useState(true)
  const [text, onChangeText] = React.useState('')
  return (
    <Inputview>
      <SvgIcon name={props?.rightIcon} size={'20'} />
      <TextInput
        style={{ flex: 1, marginLeft: 10, fontFamily: 'Poppins', fontSize: 16, fontWeight: '400',}}
        onChangeText={onChangePassword}
        placeholder={props.placeholder}
        placeholderTextColor={'#000'}
        // value={Password}
      />
      <RightText>{props?.rightlabel}</RightText>
    </Inputview>
  )
}
const Inputview = styled(TouchableOpacity)`
  height: 55px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  padding: 10px;
  border-color: #e6e6e6;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const RightText = styled(Text)`
font-family: 'Poppins';
font-style: italic;
font-weight: 500;
font-size: 13px;
color: #F79D35;
`