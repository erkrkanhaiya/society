import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { SvgIcon } from '@/Assets/Images/property'
export default function Navigantion({ header}) {
  return (
    <Main>
      <SvgIcon name={'Back2'} width={'14px'} height={'14px'} />
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Poppins',
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
