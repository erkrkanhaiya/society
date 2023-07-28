import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({
  newlistingview: {
    marginHorizontal: 10,
  },
  menuview:{
flexDirection:"row",
justifyContent:"space-between",
marginHorizontal:10,
marginTop:20
  },

  titleparent: {
    height: 145,
    width: 145,
    backgroundColor: 'white',
    marginRight: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6
  },

  service: {
    height: 90,
    width: 100,
    backgroundColor: 'white',
    marginRight: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6,
    
  },
  titleparent2: {
    position: 'absolute',
    bottom: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  title2: { fontSize: 9, color: 'white', fontWeight: '400' },

  titleparent: {
    height: 145,
    width: 145,
    backgroundColor: 'white',
    marginRight: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6
  },
  locatedPropertyParent: {
    alignItems:"center",
    marginTop:10
  },
  locatedPropertytext: {
    fontSize: 14,
    color: '#232222',
    fontWeight: '600',
  },
  locatedPropertytext2: { fontSize: 9, color: '#131212', fontWeight: '400',marginTop:2 },
  searchview: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#01A449',
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderBottomEndRadius: 9999,
    borderTopEndRadius: 9999,
  },
  searchviewtext: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Poppins-Regular'
  },
  location: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: '#E4E4E4',
    position: 'relative',
  },
  iconstyle: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  locationchild: {
    marginLeft: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  locationchildtext: {
    color: '#747474',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 5,
  },
  mentor: {
    width: 150,
    marginRight: 15,
    borderRadius: 6,
    paddingBottom: 10,
    backgroundColor: 'white',
    marginBottom:25
  },
  mentorchild: {
    alignItems: 'center',
    paddingTop: 8,
  },
  view1parent: {
    position: 'relative',
  },
  Mentorarc2: {
    position: 'absolute',
    right: -15,
    top: 15,
  },
  mentorname: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },
  mentorname2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#8A8A8A',
  },
  mentorchild2: {
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,

    justifyContent: 'space-around',
  },
  mentorview1: { justifyContent: 'center', alignItems: 'center' },
  mentortext: { fontSize: 10, fontFamily: 'Poppins-Regular' },
  mentortext2: { fontSize: 8, fontFamily: 'Poppins-Regular', color: '#8A8A8A' },

})
export { styles }
