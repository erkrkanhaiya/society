import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
export default function _Button(props) {
  return (
    <Buttonviewmain>
      <Buttonview>
        <Button>{props.buttontext}</Button>
      </Buttonview>
    </Buttonviewmain>
  )
}
const Buttonviewmain = styled(TouchableOpacity)`
  align-self: center;
  margin-top: 30px;
  margin-bottom: 35px;
`
const Buttonview = styled(View)`
  background-color: #01A449;
  width: 230px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`
const Button = styled(Text)`
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  font-family: 'Poppins-Regular';
  color: white;
`
