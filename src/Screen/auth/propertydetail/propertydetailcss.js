import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({
  titleparent: {
    backgroundColor: 'white',
    marginRight: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  discription: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  amenities: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
    padding: 2,
    borderRadius: 3,
  },
  amenitiechild: {
    flexDirection: 'row',
    alignItems: 'center',
    borderEndWidth: 0.5,
    borderColor: '#D9D7D7',
    backgroundColor: '#F0F6C3',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
  },
  newlistingicon: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  newlistingparent: {
    flexDirection: 'row',
  },
  newlistingicon2: {
    marginLeft: 8,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  headerparent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C8C8',
  },
  detailstext: {
    paddingRight: 10,
    fontSize: 16,
    width: 100,
    fontFamily: 'Poppins-Regular',
  },
  detailstext2: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  discription2: {
    fontSize: 14,
    lineHeight: 22,
    color: '#595959',
    marginTop: 15,
  },
  margin: {
    marginTop: 20,
  },
  profile: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:20
  },
  profilechild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view1parent: {
    position: 'relative',
  },
  mainviewchild: {
    marginLeft: 12,
    paddingBottom: 5,
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
    color: '#868686',
  },
  textchild3: {
    fontSize: 10,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  mobile: {
    flexDirection: 'row',
    marginTop: 5,
  },
  mobileno: {
    marginLeft: 2,
    color: '#777676',
    fontSize: 13,
  },
})
export { styles }
