import { StyleSheet, Text } from 'react-native'
import styled from 'styled-components'

const Inputstyle = styled(Text)`
  /* background-color: black; */
  color: white;
  font-weight: 800;
  margin-left: 35;
  margin-right: 35;
  padding-top: 12;
  padding-bottom: 12;
  text-align: center;
  opacity: 0.5;
  font-size: 16px;
  font-weight: 600;
  opacity: 1;
`
export { Inputstyle }

export const appcss = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  darkbutton: {
    backgroundColor: 'black',
    marginLeft:35,
    marginRight:35,
    borderRadius:6
  },
})
