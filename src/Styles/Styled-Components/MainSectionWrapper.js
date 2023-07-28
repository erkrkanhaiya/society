import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

function MainSectionWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
const Wrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10px;
`
export default MainSectionWrapper
