import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  text: {
    // fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
  },
  listView: {
    flexDirection: 'row',
    paddingLeft: 18,
    alignItems: 'center',
    // marginLeft:15
  },

  menuparent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
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
    alignSelf:'flex-end',
    alignContent:'flex-end'
  },

  notificationtext: {
    color: 'white',
    fontWeight: '700',
    fontSize:12
  },

  maindetailview: {
    marginLeft: 10,
    marginRight: 10,
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
  },
  qr2: {
    top: 0,
    backgroundColor: '#01A449',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
  },
  shareiconview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qr2parent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
  },
  qrtext: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    paddingBottom: 5,
    marginRight: 5,
  },
  Mentorarc2: {
    position: 'absolute',
    right: -15,
    top: 28,
  },
  mentorname: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginTop: 5,
    color: '#000',
    fontWeight: '700',
  },
  mentorname2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,

    color: '#4D4B4B',
  },
 
  
})

const Mainparent = styled(View)`
  flex: 1;
`

const ProfileCard = styled(View)`
  /* width: 326px; */
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(186, 182, 182, 0.25);
  border-radius: 9px;
`

const LisView = styled(TouchableOpacity)`
  /* width: 326px; */
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(247, 242, 242, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export { Mainparent, styles, ProfileCard ,LisView}
