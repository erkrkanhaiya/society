import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  mainview: {
    marginLeft: 10,
    marginRight: 10,
  },
  view1: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'pink',
    borderRadius: 7,
    marginTop: 10,
  },
  view2parent: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 15,
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 9,
  },
  herdertext: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginLeft: 10,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  view3: {
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  view1child: {
    width: 120,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewtext: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
  },
  viewtext2: {
    fontSize: 10,
    fontWeight: '500',
    color: '#696767',
    fontFamily: 'Poppins-Regular',
    lineHeight: 15,
  },
  keyviewmain: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 9,
    padding: 18,
  },
  keytext: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  keytextview: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginTop: 10,
  },
  keytext2: {
    fontSize: 11,
    lineHeight: 17,
    color: '#6A6868',
    marginLeft: 5,
  },
  tableview: {
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 9,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 9,
  },
  head: { height: 40, backgroundColor: '#F6F6F6' },
  text: {
    margin: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    textAlign: 'center',
  },
  text2: {
    fontSize: 10,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
  },
  tableviewtext: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    padding: 10,
    marginBottom: 2,
  },
  slideview: {
    backgroundColor: 'white',
    borderRadius: 9,
    marginTop: 15,
    padding: 18,
  },
  slideviewchild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  slidertext: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  slidertext2: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    lineHeight: 17,
  },
  slidertext3view: {
    width: 82,
    height: 25,
    backgroundColor: '#E5FAF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  slidertext3: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    lineHeight: 17,
    color: '#01A449',
  },
  margin: {
    marginTop: 100,
  },
  margin2: {
    marginTop: 20,
  },
  slidertext4: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    lineHeight: 17,
  },

})

export { styles }
