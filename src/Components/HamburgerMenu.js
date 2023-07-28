import Menu from '@/Assets/Icons/Menu'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components'

const HamburgerMenu = props => {
  return (
    <HamburgerMenuButton
      onPressIn={() => {
        props.navigation.openDrawer()
      }}
    >
      <Menu color="#fff" />
    </HamburgerMenuButton>
  )
}

export default HamburgerMenu

const HamburgerMenuButton = styled(TouchableOpacity)`
  padding: 10px;
`
