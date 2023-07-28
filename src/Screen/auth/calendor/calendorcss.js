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
  mainview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
   justifyContent:"space-between",
    paddingHorizontal: 10,
  },
  mainviewchild: {
    width: 170,
    height: 50,
    borderColor: '#BBBBBB',
    borderWidth: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:2
  },
  mainviewtext: {
    fontSize: 14,
    color: '#2D4971',
  },
  color: {
    color: '#FF0000',
  },
  color2:{
    color:"#7C7C7C",
    fontSize:11
  },
  mainviewchild2: {
    backgroundColor: '#F8F8F8',
    width:'100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
    borderColor: '#BBBBBB',
    borderWidth: 1,
  },
  mainviewchild3:{
    backgroundColor: '#F8F8F8',
    width:'100%',
    // height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    padding:30,
    borderColor: '#BBBBBB',
    borderWidth: 1,
    marginTop:3,

  }
})
export { styles }
