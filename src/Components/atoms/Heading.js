import React, { Fragment, memo } from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

const StyledHeading = styled(Text)`
  color: ${({ theme }) => theme.primary || "black"};
  text-align: ${(props) => props.align || "center"};
  word-break: ${(props) => props.wordBreak || 'inherit'};
  font-size: ${(props) => props.fontSize || '15px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  height: ${(props) => props.height || 'auto'}

`

const Heading = props => {
  return (
    <Fragment>
      <StyledHeading {...props}>{props?.text || props?.children}</StyledHeading>
    </Fragment>
  )
}

export default memo(Heading)
