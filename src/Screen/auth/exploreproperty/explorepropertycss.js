import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({
  profile: {
    height: 80,

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
  Profilearc: {
    position: 'absolute',
    right: -8,
    top: 15,
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainviewchild: {
    marginLeft: 12,
    paddingBottom: 5,
  },
  textparent: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  textchild: {
    fontFamily: 'Poppins-Regular',
  },

  profilechild2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bgcolor: {
    backgroundColor: '#F5F5F5',
  },
  mainview: {
    marginLeft: 15,
    marginRight: 15,
  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#999',
    borderWidth: 0.5,
    padding: 3,
    marginTop: 3,
    display: 'flex',
    alignItems: 'center',
  },
  textchild2: {
    fontWeight: '500',
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
  textchild3: {
    fontSize: 10,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  viewparent: {
    backgroundColor: 'green',
    marginLeft: 4,
    paddingLeft: 3,
    paddingRight: 3,
  },
  icon4child: {
    color: 'white',
    fontWeight: '700',
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
  newlistingview: {
    marginHorizontal: 10,
  },

  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 5,
  },
  location: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: '#E4E4E4',
    position: 'relative',
  },
  locationchild: {
    marginLeft: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  locationchildtext: {
    color: '#747474',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  iconstyle: {
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
  },
})
export { styles }
