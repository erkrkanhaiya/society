import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function TouchText(props) {
  return (
    <TouchableOpacity onPress={props?.onClick} style={[{}, props?._styles]}>
      <Text style={[{}, props?._titlestyle]}>{props?.title}</Text>
    </TouchableOpacity>
  )
}

 
