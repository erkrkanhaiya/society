import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
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
    fontSize: 16,
    textAlign: 'center',
  },
  dot: {
    height: 15,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  listViewchild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    // paddingRight:10,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 17,
    color: '#545050',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#8447FF',
  },
  pricetext: {
    color: '#BAB5B5',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  //   doticon:{
  // flexDirection:"row",
  // backgroundColor:"red"
  //   },

  status: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',

    fontFamily: 'Poppins',
  },
  textbox:{
    paddingRight: 25,
    paddingLeft:15,
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 25,
  },
  button: {
    marginTop: 50,
    alignItems: 'center',
  },
  selectall: {
    fontSize: 18,
    fontWeight: '500',
  },
})

const Mainparent = styled(View)`
  flex: 1;
`

const ProfileCard = styled(View)`
  /* width: 326px; */
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(186, 182, 182, 0.25);
  flex: 2;
  background-color: #349eb0;
`

const LisView = styled(TouchableOpacity)`
  /* width: 326px; */

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(247, 242, 242, 0.25);

  display: flex;
  justify-content: center;
  margin-top: 15px;
  border-bottom-width: 1px;
  border-color: #efefef;
  padding-bottom: 10;
`

export { Mainparent, styles, ProfileCard, LisView }
