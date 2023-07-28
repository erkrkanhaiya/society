import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'flex-start',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
   marginTop:15
  },
  mainview: {
    paddingHorizontal: 10,
  
  },
  containerchild: {
    color: '#706E6E',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',

  },
  containerchild2: {
    color: '#706E6E',
   marginTop:25,
   fontFamily: 'Poppins-Regular',
   marginBottom: 10,
  },
  Pricerange: {
    color: '#706E6E',
   marginTop:25,
   fontFamily: 'Poppins-Regular',
   
  },
  viewchild: {
    borderWidth: 1,
    borderColor: '#E4E4E4',
    width: '100%',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  viewchild2: {
    flexDirection: 'row',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 5,
  },
  navtext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 10,
    marginLeft: 20,
  },
  location: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#E4E4E4',
    position: 'relative',
  },
  locationchild: {
    marginLeft: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  locationchildtext: {
    color: '#747474 ',
    marginLeft: 5,
    fontSize: 14,
    paddingBottom:5,
    fontFamily: 'Poppins-Regular',
  },
  iconstyle: {
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
  },
  Pricetext:{
marginTop:15,
fontFamily: 'Poppins-Regular',
fontSize:14
  },
  button: {
    width: 178,
    height: 50,
    backgroundColor: '#01A449',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
   
  },
  buttontext: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 10,
  },
})
export { styles }
