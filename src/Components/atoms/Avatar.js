import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  width: ${(props) => props.width};
  height:  ${(props) => props.height};
  border-radius:  ${(props) => props.borderRadius};
  border:1px;
`

const Avatar = props => {
  const { src } = props

  if (!src) return null
  return <StyledImage
    width={props.width ? props.width : 50}
    height={props.height ? props.height : 50}
    borderRadius={props.borderRadius ? props.borderRadius : 30}
    source={{ uri: src }} />
}

export default Avatar
