import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  listView: {
    // flexDirection: 'row',
    // paddingLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 35,
    marginBottom: 30,

    //  marginVertical:10
  },
  listView2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 4,
    padding: 8,
   marginBottom: 30,

  },
  
  bottomborder: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  // border: {
  //   borderWidth: 1,
  //   borderColor: '#DADADA',
  //   borderRadius: 4,
  // },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#000000',
  },
  text2: {
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#349EB0',
  },
  text3: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#777676',
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
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  margin: {
    paddingTop: 20,
  },
  view1parentchild: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Mentorarc2: {
    position: 'absolute',
    right: -2,
    top: 45,
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  penmarkview: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    //
  },
  marginLeft: {
    marginRight: 10,
  },
  addview: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#A1F1FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  addtext: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
  },
  addview2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontWeight: '500',
    fontSize: 21,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  number: {
    fontWeight: '500',
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  editprofile: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    marginTop: 5,
  },
  place: {
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
})

const Mainparent = styled(View)`
  flex: 1;
`
const LisView = styled(TouchableOpacity)`
  /* width: 326px; */
  height: 50px;
  background: red;
  box-shadow: 0px 4px 4px rgba(247, 242, 242, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;

  margin-top: 10px;
`

export { Mainparent, styles, LisView }
