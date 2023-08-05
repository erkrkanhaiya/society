import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import { SvgIcon } from '@/Assets/Images/property'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function _Input(props) {
  const [text, onChangeText] = React.useState('')
  const icon = () => {
    return <SvgIcon name={props.icon} size={props.size} />
  }
  return (
    <Inputview>
      <TextInput
        multiline={true}
        theme={{
          colors: { 
            background: 'white',
          },
        }}
        mode="outlined"
        label={props.label}
        style={{ flex: 1, height: props.height }}
        onChangeText={onChangeText}
        left={<TextInput.Icon name={icon} />}
        value={text}
      />
    </Inputview>
  )
}
const Inputview = styled(TouchableOpacity)`
  /* height: 50px; */
  margin-top: 20px;
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`
