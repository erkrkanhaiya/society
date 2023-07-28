import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

// import styled from 'styled-components'
const styles = StyleSheet.create({
  profile: {
    height: 80,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilechild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view1parent: {
    position: 'relative',
  },
  logo: {
    fontSize: 31,
    fontWeight: '900',
    color: '#45A4B6',

    alignSelf: 'center',
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
  icon4: {
    backgroundColor: '#45A4B6',
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
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  parent: {
    width: '100%',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  icon4child: {
    color: 'white',
    fontWeight: '700',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerchild: {
    width: 65,
    height: 65,
    backgroundColor: '#F8F8FC',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containermain: {
    marginVertical: 10,
    alignItems: 'center',
    width: 100,
  },
  containertext: {
    fontSize: 14,
    color: '#575757',
    marginTop: 5,
  },

  containerparent: {
    borderColor: '#9D9D9D40',
    borderWidth: 1,
    borderRadius: 9,
    padding: 15,
    marginVertical: 5,
  },

  headertext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#585757',
  },
})
const Viewmenu = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 180px;
`

export { styles, Viewmenu }
