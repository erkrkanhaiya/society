import { Text, View } from 'react-native'
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

const Question = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  color: ${({ theme }) => theme.color.primary};
`

const Answer = styled(View)`
  background-color: #c9fff1;
  padding: 8px;
  /* width: 80px; */
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`
const AnswerText = styled(Text)`
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export default {
  Question,
  Answer,
  AnswerText,
  BoldPrimaryText,
  NormalText,
  EmphasizedText,
  MediumText,
}
