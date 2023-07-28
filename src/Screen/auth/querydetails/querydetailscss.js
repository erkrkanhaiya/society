import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

// import styled from 'styled-components'
const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  profilechild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view1parent: {
    position: 'relative',
  },
  mainviewchild: {
    marginLeft: 12,
    paddingBottom: 5,
  },
  textparent: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop:5
  },
  textchild: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  textchild2: {
    fontWeight: '500',
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#868686',
  },
  icon1: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    marginLeft: 5,
  },
  contact: {
    height: 30,
    width: 80,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01A449',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  timetext: {
    marginLeft: 5,
    fontSize: 11,
  },
  Text:{
   fontSize:16,
   fontWeight:"500",
   fontFamily: 'Poppins-Regular', 
   marginLeft:15,
   marginVertical:10,

  }
})

export { styles }
