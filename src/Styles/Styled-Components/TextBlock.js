import { Text } from 'react-native'
import styled from 'styled-components'

const BoldPrimaryText = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 10px;
  font-weight: bold;
  padding: ${props => (props.padding ? props.padding : '10px')};
  font-family: ${({ theme }) => theme.secondryFontFamily};
`

const NormalText = styled(Text)`
  font-size: 14px;
  color: gray;
  margin-bottom: 15px;
  padding: ${props => (props.padding ? props.padding : '10px')};
  padding-left: ${props =>
    props.paddingHorizontal ? props.paddingHorizontal : '10px'};
  padding-right: ${props =>
    props.paddingHorizontal ? props.paddingHorizontal : '10px'};
  font-family: ${({ theme }) => theme.secondryFontFamily};
`

const EmphasizedText = styled(Text)`
  color: #33c8a0;
  font-weight: bold;
  margin-bottom: 15px;
  padding: ${props => (props.padding ? props.padding : '10px')};
  padding-left: ${props =>
    props.paddingHorizontal ? props.paddingHorizontal : '10px'};
  padding-right: ${props =>
    props.paddingHorizontal ? props.paddingHorizontal : '10px'};
  font-family: ${({ theme }) => theme.secondryFontFamily};
`

const MediumText = styled(Text)`
  font-size: 14px;
  color: gray;
  margin-bottom: 15px;
  padding: ${props => (props.padding ? props.padding : '10px')};
  padding-left: ${props =>
    props.paddingHorizontal ? props.paddingHorizontal : '10px'};
  padding-right: ${props =>
    props.paddingHorizontal ? props.paddingHorizontal : '10px'};
  font-family: ${({ theme }) => theme.secondryFontFamily};
`

const John = styled(Text)`
color: gray;
   
`


 

export default {John, BoldPrimaryText, NormalText, EmphasizedText, MediumText,  }
