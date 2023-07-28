import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'
const styles = StyleSheet.create({
  view2: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  textview: {
    flex: 0.75,
  },
  view1child: {
    justifyContent: 'center',
    alignItems: 'center',

    flex: 0.5,
  },
  textviewchild: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
  },
  textviewchild2: {
    color: '#616161',
  },

  button: {
    marginTop: 30,
    alignItems: 'center',
  },
})
const Mainparent = styled(View)`
  flex: 1;
  background-color: white;
`
export { Mainparent, styles }
