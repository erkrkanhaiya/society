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
  margin: {
    // marginTop: 10,
    marginBottom: 5,
  },
  listView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  view1: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
  bottomsec: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  bottomsectext: {
    fontSize: 15,
  },
  bottomsectext2: {
    color: '#BABABA',
  },
  iconview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconviewmain: {
    borderRadius: 9999,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45A5B6',
  },
  iconviewtext: {
    marginLeft: 5,
    color: '#5FB118',
  },

  listViewchild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,

    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
  },
  status: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  pricetext: {
    color: '#349EB0',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
    fontFamily: 'Poppins',
  },

  notification: {
    // backgroundColor: '#45A5B6',
    borderRadius: 25,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
  /* height: 60px; */

  background: #f4fbff;
  box-shadow: 0px 4px 4px rgba(247, 242, 242, 0.25);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-right: 10;
  margin-left: 10;
  border-width: 1;
  border-color: #f4fbff;
`

export { Mainparent, styles, ProfileCard, LisView }
