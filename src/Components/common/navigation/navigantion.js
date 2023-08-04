import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { SvgIcon } from '@/Assets/Images/property'
export default function Navigantion({ header, goBack,icon,color }) {
  return (
    <Main>
      <TouchableOpacity onPress={() => {goBack()}} style={{ height: 20, width: 20, justifyContent: 'center', alignItems: 'center' }}>
      {icon ? <SvgIcon name={'backf'} width={'24px'} height={'24px'}/>:<SvgIcon name={'Back2'} width={'14px'} height={'14px'}   />}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Poppins',
          color:color
        }}
      >
        {header}
      </Text>
      <Fakeview />
    </Main>
  )
}
const Main = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`
const Fakeview = styled(View)`
  width: 14px;
    

`
