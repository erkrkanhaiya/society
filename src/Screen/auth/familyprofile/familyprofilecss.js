import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    
  },
  view1child: {
    backgroundColor:"pink",
    marginTop:50,
    padding:10,
    paddingLeft:20,
    flexDirection:"row",
    alignItems:"center"
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth:2,
    borderRadius:10,
    shadowOpacity: 0.8, 
    backgroundColor:"white",
    borderColor:"#2D4971",
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
  protext:{
    color:"#2D4971",
    fontSize:14
  },
  proview:{
marginLeft:20
  },
  protext2:{
    color:"#2D4971",
    fontSize:14,
    marginTop:3
  },
  member:{
    color:"#2D4971",
    fontSize:20
  },
  memberparent:{
flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:20,
marginTop:10
  },
  addnewview:{
    backgroundColor:"#2D4971",
    width:105,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    padding:4
  },
  addnew:{


color:"white",

  },
})

const Mainparent = styled(View)`
  flex: 1;
  background-color: white;
`
export { Mainparent, styles }
