import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Title = ({ SVG, children }) => {
  return (
    <TitleWrapper
      style={{
        borderBottomColor: 'rgb(229, 229, 229)',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderWidth: 1,
      }}
    >
      <SVG />
      <ChildrenElement>{children}</ChildrenElement>
    </TitleWrapper>
  )
}

const TitleWrapper = styled(View)`
  flex-direction: row;
  margin: 15px;
  padding: 5px;
`

const ChildrenElement = styled(View)`
  width: 25%;
  margin-left: 10;
`

export default Title
