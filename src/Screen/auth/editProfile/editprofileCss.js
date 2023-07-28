import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const styles = StyleSheet.create({


    textviewchild: {
        color: '#706E6E',
        fontFamily: 'Poppins-Regular',
      },





  maindetailview: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  mentorchild: {
    alignItems: 'center',
    paddingTop: 8,
    marginTop: 15,
    position: 'relative',
  },
  view1parent: {
    position: 'relative',
  },
  qr2: {
    top: 0,
    backgroundColor: '#01A449',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
  },
  shareiconview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qr2parent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
  },
  qrtext: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    paddingBottom: 5,
    marginRight: 5,
  },
  Mentorarc2: {
    position: 'absolute',
    right: -15,
    top: 28,
  },
  mentorname: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginTop: 5,
    color: '#000',
    fontWeight: '700',
  },
  mentorname2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,

    color: '#4D4B4B',
  },
  mentorname3: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,

    color: '#4D4B4B',
    marginTop: 10,
  },
  iconviewparent: {
    backgroundColor: '#FBFBFB',
    marginTop: 30,
    paddingBottom: 15,
    paddingTop: 10,
    paddingLeft: 5,
  },
  iconview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    paddingLeft: 15,
  },
  icontext: {
    color: '#6B6A6A',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    marginRight: 10,
  },
  iconview2: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Portfolio: {
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Portfoliotext: {
    fontWeight: '500',
    fontSize: 16,
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
  },

  newlistingparent: {
    width: 164,
    backgroundColor: 'white',
    borderWidth:1,
    padding:4,
    borderColor:"#E2E1E1",
    margin:10,
    borderRadius: 9,
  },
  newlisting: {
    alignItems: 'center',
  },
  newlistingicon: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    width: 15,
    height: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    bottom: 8,
    right: 25,
  },
  newlistingicon2: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    width: 15,
    height: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    bottom: 8,
    right: 45,
  },
  renttype: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FFC700',
    borderWidth: 1,
    borderColor: '#ffffff',
    left: 15,
    top: 10,
    width: 58,
    alignItems: 'center',
  },
  renttext: {
    fontSize: 8,
    fontWeight: '500',

    fontFamily: 'Poppins-Regular',
    lineHeight: 15,
  },
  renttype2: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#EF4444',
    borderWidth: 1,
    borderColor: '#ffffff',
    left: 15,
    top: 26,
    width: 58,
    alignItems: 'center',
  },
  renttext2: {
    fontSize: 8,
    fontWeight: '500',

    fontFamily: 'Poppins-Regular',
    lineHeight: 15,
    color: 'white',
  },
  verified: {
    position: 'absolute',
    right: 25,
    top: 5,
    height: 18,
    width: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  listviewparent: {
    padding: 5,
    alignItems:"flex-start"
  },
  heading: {
    fontSize: 11,
    fontWeight: '500',

    fontFamily: 'Poppins-Regular',
  },
  disbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discriptipon: {
    fontSize: 9,
    marginTop: 3,
    color: '#555555',
    fontFamily: 'Poppins-Regular',
    marginLeft: 2,
  },
  amenities: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
 
    borderRadius: 3,
  },
  amenitiechild: {
    flexDirection: 'row',
    
    alignItems: 'center',
    borderEndWidth: 0.5,
    borderColor: '#D9D7D7',
    backgroundColor: '#F0F6C3',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 3,
    paddingRight: 3,
  },

  listview: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop:10,
    justifyContent:"center",
  },
})

export { styles }
