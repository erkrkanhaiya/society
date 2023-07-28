import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({
    newlistingview:{
        marginHorizontal:10
          },
  location: {
    backgroundColor: 'white',
    marginTop:10,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: '#E4E4E4',
    position:"relative"
    
  },
  iconstyle:{
    justifyContent:"center",
   position:"absolute",
   right:20
  },
  locationchild: {
    marginLeft: 12,
   justifyContent:"space-between",
    flexDirection: 'row',
   
  },
  locationchildtext: {
    color: '#747474',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  text:{
 marginTop:25,
 fontSize:18,
 fontWeight:"500"
  }
})
export { styles }
