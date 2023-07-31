import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

// import styled from 'styled-components'
const styles = StyleSheet.create({
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
    fontSize: 20,
    textAlign: 'center',
  },
  client: {
    position: 'absolute',
    right: 45,
  },
  bgcolor: {
    backgroundColor: 'white',
  },
  mainview: {
    marginLeft: 15,
    marginRight: 15,
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
  },
  cardview: {
    borderWidth: 2,
    borderColor: '#9D9D9D40',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
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
  
})
const Viewmenu = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 180px;
`

export { styles, Viewmenu }
