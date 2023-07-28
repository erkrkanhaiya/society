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
    display: 'flex',
    // justifyContent:"center",
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  view1parent: {
    position: 'relative',
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
    color:'white'
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
  mentorchild: {
    alignItems: 'center',
    paddingTop: 8,
    marginTop: 15,
    position: 'relative',
  },
  view1parent: {
    position: 'relative',
  },
  Mentorarc2: {
    position: 'absolute',
    right: -15,
    top: 28,
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

const ProfileCard = styled(View)`
  /* width: 326px; */
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(186, 182, 182, 0.25);

  background-color: #349eb0;
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

export { Mainparent, styles, ProfileCard, LisView }
