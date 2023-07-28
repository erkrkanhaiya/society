import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  navtext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    paddingVertical: 10,
    marginLeft: 15,
    textAlign: 'center',
  },
  navtext2: {
    fontSize: 10,
    color: 'white',
    
  },
  width: {
    width: 180,
  },
  navtextview: {
    backgroundColor: '#0066FF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-around',
    borderBottomLeftRadius:30,
    borderTopEndRadius:30,
    marginVertical:10
  },
  seemore:{
    fontSize:10,
    color:"white",
    textAlign:"right",
   
  },
  
})
export { styles }
