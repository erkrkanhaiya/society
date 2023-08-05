import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

// import styled from 'styled-components'
const styles = StyleSheet.create({
  mainview: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  // profilechild: {
  //   display: 'flex',
  //   // justifyContent:"center",
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   // backgroundColor:"red"
  // },
  view1parent: {
    position: 'relative',
  },
  logo: {
    fontSize: 20,
    textAlign: 'center',
  },
  client: {
    position: 'absolute',
    right: 45,
  },
  addicon: {
    // backgroundColor:"red"
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
  containerparent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerchild: {
    width: 50,
    height: 50,
    backgroundColor: '#F8F8FC',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containermain: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containertext: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
  },
  addview: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#349EB0',
    borderRadius: 9999,
    position: 'absolute',
    bottom: -15,
    right: 0,
  },
  badge:{
    backgroundColor: 'white',
    position: 'absolute',
    padding: 5,
    paddingHorizontal: 10,
    top: 15,
  },
  badgesize:{
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  cardview: {
    borderWidth: 2,
    borderColor: '#9D9D9D40',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
    padding: 8,
    justifyContent: 'space-around',
  },
  cardtext: {
    fontWeight: '600',
    fontSize: 17,
    paddingBottom: 5,
  },
  icontext: {
    color: '#636363',
    fontSize: 14,
    marginLeft: 5,
  },
  addview2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
})
const Viewmenu = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 180px;
`

export { styles, Viewmenu }
