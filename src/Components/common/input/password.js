import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'

import { SvgIcon } from '@/Assets/Images/property'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function PasswordInput(props) {
  const [Password, onChangePassword] = React.useState('')
  const [hidePass, setHidePass] = useState(true)
  const [text, onChangeText] = React.useState('')
  // console.log('first')
  return (
    <Inputview>
      {/* <SvgIcon name={'vector1'} size={'18'} /> */}
      <TextInput
        theme={{
          colors: {
            background: 'white',
          },
        }}
        mode="outlined"
        label={props.label}
        style={{ flex: 1 }}
        left={<TextInput.Icon icon="eye" />}
        onChangeText={onChangePassword}
        placeholder={props.placeholder}
        value={Password}
        secureTextEntry={hidePass ? true : false}
      />

      {/* <SvgIcon
        onpress={() => {
          setHidePass(!hidePass)
        }}
        name={hidePass ? 'closeeye' : 'openeye'}
        size={22}
      /> */}
    </Inputview>
  )
}
const Inputview = styled(TouchableOpacity)`
  border-color: #d2d2d2;
  flex-direction: row;
  margin-top: 10;
`
