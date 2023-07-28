import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'
const styles = StyleSheet.create({
  view2: {
    flex: 0.9,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  textview: {
    marginTop: 10,
  },
  textviewchild: {
    color: '#2D4971',
    marginBottom: 5,
    fontSize: 14,
  },
  button: {
    marginTop: 10,
  },
})
const Mainparent = styled(View)`
  flex: 1;
  background-color: white;
`
export { Mainparent, styles }
