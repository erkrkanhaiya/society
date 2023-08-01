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
    marginTop: 50,
    marginBottom: 5,
  },
  listView: {
    flexDirection: 'row',

    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  pricetext: {
    color: '#349EB0',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },

  notification: {
    // backgroundColor: '#45A5B6',
    borderRadius: 25,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
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
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(247, 242, 242, 0.25);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  border-width: 1;
  border-color: #9d9d9d40;
`

export { Mainparent, styles, ProfileCard, LisView }
