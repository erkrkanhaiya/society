import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'
const styles = StyleSheet.create({
  view1: {},
  view1child: {
    flex: 1,
    backgroundColor: '#000000',
    // padding: 20,

    display: 'flex',
    justifyContent: 'center',
  },
  headertext: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 10,
    fontFamily: 'Poppins',
  },

  view2: {
    flex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -40,
    paddingHorizontal:10
  },
  icontext: {
    fontSize: 14,
    marginLeft: 10,
    color: '#636363',
    fontFamily: 'Poppins',
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view3parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    paddingTop: 20,
    paddingBottom: 15,
    marginTop: 15,
  },
  textviewchild: {
    color: '#706E6E',
    fontFamily: 'Poppins-Regular',
  },
  dscription: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 12,
    fontFamily: 'Poppins',
  },
  dscription2: {
    fontSize: 14,
    lineHeight: 24,
    color: '#636363',
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  dscription3: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#636363',
    marginTop: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 25,
    backgroundColor: '#AAAAAA',
    marginTop: 5,
    marginRight: 8,
  },
  dotparent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  top:{
    marginTop:25
  },
  wrapbox:{
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10
  }
  /////
})
const Mainparent = styled(View)`
  flex: 1;
  background-color: 'white';
`
export { Mainparent, styles }
