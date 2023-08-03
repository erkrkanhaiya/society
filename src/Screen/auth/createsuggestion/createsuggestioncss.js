import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'
const styles = StyleSheet.create({
  view2: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    // justifyContent: 'center',
  },
  textview: {
    flex: 0.75,
    marginTop: 20,
    // backgroundColor:"red"
  },
  uploadview: {
    borderColor: '#F2F0F0',
    borderWidth: 1,
    borderRadius: 9,
    height: 95,
    width: 100,
    backgroundColor: '#F6F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadtext: {
    fontSize: 12,
    color: '#888989',
    position: 'absolute',
    bottom: 12,
  },
  top: {
    marginTop: 25,
  },
  wrapbox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dscription: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 12,
    fontFamily: 'Poppins',
  },
  dscription2: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
    fontFamily: 'Poppins',
    color: '#535151',
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
