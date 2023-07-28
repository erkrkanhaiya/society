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
  view1child: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textviewchild: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  textviewchild2: {
    color: '#616161',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25,
  },
  middleview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifytext: {
    textAlign: 'right',
    marginTop: 25,
  },
  justifytext2: {
    marginTop: 35,
  },
  spantext: {
    color: '#45A5B6',
    paddingTop: 10,
  },

  button: {
    marginTop: 30,
    alignItems: 'center',
  },
  ///////otp csss/////////
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0,

    borderBottomWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: '#C1C1C1',
  },
})
const Mainparent = styled(View)`
  flex: 1;
  background-color: white;
`
export { Mainparent, styles }
