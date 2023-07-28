import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view1child: {
    height: 250,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop:10
  },
  wrapchild: {
    width: 170,
    height: 180,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderRadius:10,
    shadowOpacity: 0.22, 
    backgroundColor:"white",
    shadowOffset: {
      width: 0,
      height: 3,   
    },
   
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
  },
})

const Mainparent = styled(View)`
  flex: 1;
  background-color: white;
`
export { Mainparent, styles }
