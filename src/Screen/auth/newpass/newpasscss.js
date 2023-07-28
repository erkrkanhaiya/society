import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'
const styles = StyleSheet.create({
  view2: {
    flex: 1,
    backgroundColor: 'white',
   
    justifyContent: 'center',
   
  },
  
  view1child: {
    justifyContent: 'flex-end',
    alignItems: 'center',

    flex: 0.5,
  position:"relative",
  paddingBottom:20

  },
  textview: {
    flex: 0.75,
   marginHorizontal:25,
    marginTop:30
  },
 
    // image: {
    //   flex: 1,
    //   justifyContent: 'center',
    // },
  
  textviewchild: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    marginBottom: 5,
    fontWeight: '600',
  },
  textviewchild2: {
    color: '#616161',
    fontSize: 16,
  },
  sidebutton2: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    color: '#5A5858',
    marginTop: 10,
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
