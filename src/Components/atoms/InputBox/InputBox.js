import React from 'react'
import { useState } from 'react'
import { TextInput, Text } from 'react-native'
import { color } from 'react-native-reanimated'
import styled from 'styled-components'

const InputBox = ({
  mode = 'outlined',
  name = '',
  label = '',
  value = '',
  secureTextEntry = false,
  error = false,
  multiline = false,
  numberOfLines = 1,
  placeHolder = '',
  handler,
  height,
}) => {
  const [contentHeight, setContentHeight] = useState(10)
  return (
    <>
      <Text
        style={{
          fontWeight: '700',
          marginVertical: 5,
          color: 'rgb(73, 31, 105)',
          marginLeft: 5,
          fontSize: 15,
        }}
      >
        {label}
      </Text>
      <TextInputStyles
        // mode={mode}
        // label={label}
        style={{
          // height: Math.min(120, Math.max(35, contentHeight)),
          borderColor: error ? '#ac1c1c' : 'rgb(233, 217, 245)',
          marginBottom: 15,
          height: height || 40,
        }}
        secureTextEntry={secureTextEntry}
        value={value}
        error={error}
        placeholder={placeHolder || label}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={val => handler(name, val)}
        onContentSizeChange={event => {
          setContentHeight(event?.nativeEvent?.contentSize?.height)
        }}
      />
    </>
  )
}

const TextInputStyles = styled(TextInput)`
  border: 1px;
  margin: 4px;
  padding: 10px;
`

export default InputBox
