import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import React from 'react'
export default function ViewButton(props) {
  return (
    <Buttonparent>
      <Viewalltext>{props.Viewalltext}</Viewalltext>
      {props.Buttontext && (
        <Viewallchild>
          <Viewalltext2>View all</Viewalltext2>
        </Viewallchild>
      )}
    </Buttonparent>
  )
}
const Buttonparent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
`
const Viewalltext = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Poppins-Regular';
`
const Viewallchild = styled(View)`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  border-radius: 20px;
  border-color: #dbdbdb;
  border-width: 1px;
`
const Viewalltext2 = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  font-family: 'Poppins-Regular';
`
