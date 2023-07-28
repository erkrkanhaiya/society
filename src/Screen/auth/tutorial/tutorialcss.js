import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

// import styled from 'styled-components'
const styles = StyleSheet.create({
  navtext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    paddingVertical: 10,
    marginLeft: 15,
  },
  mainview: {
    padding: 5,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 9,
    padding: 15,
  },
  step: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#01A449',
  },
  step2:{
    marginTop:50
  },
  details: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  },
  details2: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  },
  details5:{
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
  details3:{
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
    color:"#7A7A7A",
    lineHeight:21
  },
  details4:{
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  backgroundColor:"#F3FAFC",
  padding:5,
    lineHeight:22,
    borderRadius:4,
    marginTop:15
  },
  bulletview:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10
  },
  bullettext:{
fontSize:14,
marginLeft:10,
fontWeight:"500",
fontFamily: 'Poppins-Regular',

  },
  image:{
    borderRadius:6,
    marginTop:15,
    paddingBottom:10
  },
})
export { styles }
