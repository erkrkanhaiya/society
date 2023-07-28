import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({
  newlistingview:{
marginHorizontal:10
  },
  Portfolio: {
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Portfoliotext: {
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'Poppins-Regular'
  },
  Portfoliochild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Portfoliotext2: {
    padding: 3,
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#625F5F',
    color: '#625F5F',
    marginLeft:20,
    fontFamily: 'Poppins-Regular'
  },
  listview: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop:10,
    justifyContent:"center",
  },
  filterparent:{
alignItems:"center",
flexDirection:"row"
  },
  filter:{
    backgroundColor:"white",
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
  },
  icon1: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  icon2: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    marginRight: 15,
    marginLeft: 15,
  },
  icon3: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    position: 'relative',
  },
  icon4: {
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 9999,
    width: 15,
    height: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
    top: 5,
  },
  icon4child: {
    color: 'white',
    fontWeight: '700',
  },
  topicon:{
    flexDirection: 'row',
    justifyContent:"flex-end",
    marginTop:10
  },
})

export { styles }
