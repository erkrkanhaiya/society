import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    color: '#000',
    fontSize: 16,
    lineHeight: 20,
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
  },
  parent: {
    position: 'relative',
  },
  child: {
    position: 'absolute',
    right: -40,
    bottom: 45,
  },
  textbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  textboxchild: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  textboxchild2: {
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  mainchild: {
    marginLeft: 25,
    marginRight: 25,
  },
  input: {
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#e6e6e6',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textview: {
    marginTop: 10,
  },

  borderbutton: {
    fontWeight: 800,
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 6,
    paddingTop: 12,
    paddingBottom: 12,
    height: 50,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const Textstyle = styled(Text)`
  color: black;
  font-weight: 800;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  opacity: 0.5;
  font-size: 16px;
  font-weight: 600;
  opacity: 1;
`
const Main = styled(View)`
  width: 100%;
  bottom: 0%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`
const Mainparent = styled(View)`
  flex: 1;
`
const Swipermenu = styled(View)`
  /* height: 300px; */
  flex: 5;
`
const Buttonview = styled(TouchableOpacity)`
  font-weight: 800;
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 12px;
  padding-bottom: 15px;
  margin-top: 25px;
  margin-bottom: 20px;
`
export { Textstyle,  Main, Swipermenu, Mainparent, styles, Buttonview }
