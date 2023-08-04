import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  listView: {
    flexDirection: 'row',
    paddingLeft: 18,
    alignItems: 'center',
    // marginLeft:15
  },
  text: {
    // fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
  },
  profilechild: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 30,
  },
  logoparent: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },

  view1parent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  
  menu: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    backgroundColor: '#F79D35',
    borderRadius: 25,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    left: 100,
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },
  notificationtext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  infotextheader: {
    fontSize: 17,
    fontWeight: '700',
  },
  infotext1: {
    fontSize: 17,
    fontWeight: '500',
    color:"#575757"
  },
  infotext2: {
    fontSize: 16,
    color:"#757575"
  },
  infomailview: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  Mentorarc2: {
    position: 'absolute',
    right: -15,
    top: 28,
  },
  margin:{
marginTop:15
  },
  mentorname: {
    fontFamily: 'Poppins-Regular',
    fontSize: 21,
    marginTop: 5,
    color: '#000',
    fontWeight: '500',
    color: 'white',
  },
  mentorname2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,

    color: 'white',
  },
})

const Mainparent = styled(View)`
  flex: 1;
`



export { Mainparent, styles, }
