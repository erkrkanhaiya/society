import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({
  maindetailview: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  mentorchild: {
    alignItems: 'center',
    paddingTop: 8,
    marginTop: 15,
    position: 'relative',
  },
  view1parent: {
    position: 'relative',
    paddingBottom: 10,
  },
  Mentorarc2: {
    position: 'absolute',
    right: -10,
    top: 30,
  },
  profile: {
    fontSize: 20,
    color: '#2D4971',
    marginBottom: 20,
  },
  label: {
    color: '#2D4971',
    fontSize: 14,
   
  },
  label2:{
    marginTop:15
  },
  inputview: {
    marginTop: 30,
  },
  gender: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D2D2D2',
    height: 50,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  genderchild: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  labelview: {
    flexDirection: 'row',
    flex: 1,
  },
  labelviewchild: {
    flex: 1,
    marginRight: 15,
  },
  passwordtext:{
    fontSize:10,
    color:"white",
    padding:5,
    backgroundColor:"#2D4971",
    width:115,
    alignSelf:"flex-end"
  }
})

export { styles }
