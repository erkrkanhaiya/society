import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  circle: {
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 9999,
    right: 0,
    top: 0,
  },
  circlechild: {
    color: 'white',
    fontSize: 14,
  },
  listViewchild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  text2: {
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginTop: 3,
  },
  profiletext: {
    fontSize: 13,
    fontFamily: 'poppins',
    color: '#858585',
    marginLeft: 5,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  pricetext: {
    color: '#BAB5B5',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  timeview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  status: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    fontSize: 13,
    color: 'white',
  },
  textbox: {
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  border-width: 1px;
  border-color: #dadada;
  padding-bottom: 10px;
  border-radius: 9px;
`

export { Mainparent, styles, ProfileCard, LisView }
