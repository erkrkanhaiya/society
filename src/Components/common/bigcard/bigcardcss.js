import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

// import styled from 'styled-components'
const styles = StyleSheet.create({
  profile: {
   
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   paddingHorizontal:10,
   paddingBottom:10
  },
  profilechild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  textchild2: {
    fontWeight: '500',
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#868686',
  },
  icon1: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    marginLeft: 5,
  },
  querry: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  querrychild: {
    padding: 5,
    borderRadius: 9999,
    backgroundColor: '#F79D35',
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactparent1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    borderTopColor: '#F0EBEB',
    borderTopWidth: 1,
  },
  contactparent2: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
    width: 230,
    alignItems: 'center',

    backgroundColor: '#01A449',
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 15,
  },
  contact: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    color: 'white',
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
  Mentorarc: {
    position: 'absolute',
    right: -8,
    top: 5,
  },
  Mentorarc2: {
    position: 'absolute',
    right: -15,
    top: 15,
  },
  verified: {
    position: 'absolute',
    right: 15,
    top: 5,
    height: 32,
    width: 32,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
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
  
  newlistingicon: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    bottom: 8,
    right: 15,
  },
  newlistingicon2: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    bottom: 8,
    right: 55,
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
  notification: {
    backgroundColor: '#F79D35',
    position: 'absolute',
    borderRadius: 9999,
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    bottom: 25,
  },
  icon4child: {
    color: 'white',
    fontWeight: '700',
  },
  notificationtext: {
    color: 'white',
    fontWeight: '700',
  },
  location: {
    backgroundColor: 'white',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: '#E4E4E4',
  },
  locationchild: {
    marginLeft: 12,
    flexDirection: 'row',
  },
  locationchildtext: {
    color: '#747474',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  wrapper2: {
    backgroundColor: 'red',
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

  parent2: {
    width: 180,
    marginLeft: -300,
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'green',
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleparent: {
    height: 145,
    width: 145,
    backgroundColor: 'white',
    marginRight: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  titleparent2: {
    position: 'absolute',
    bottom: 15,
    zIndex: 1,
  },
  locatedPropertyParent: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  title2: { fontSize: 9, color: 'white', fontWeight: '400' },
  locatedPropertytext: {
    fontSize: 14,
    color: '#232222',
    fontWeight: '600',
  },
  locatedPropertytext2: {
    fontSize: 9,
    color: '#131212',
    fontWeight: '400',
    marginTop: 2,
  },
  viewallparent: { backgroundColor: '#ffffff', marginTop: 30, borderRadius: 6 },
  viewallparent2: { paddingLeft: 15, paddingRight: 15 },
  viewall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10,
  },
  viewalltext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  viewalltext2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#606060',
    fontFamily: 'Poppins-Regular',
  },
  viewallchild: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#DBDBDB',
    borderWidth: 1,
  },
  newlistingparent: {
    width: 325,
    backgroundColor: 'white',
    marginRight: 15,
    borderRadius: 9,
  marginVertical:8
  
  },
  newlisting: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
  },
  listviewparent: {
    padding: 10,
  },
  heading: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 25,
    fontFamily: 'Poppins-Regular',
    marginLeft: 2,
  },
  discriptipon: {
    fontSize: 12,
    lineHeight: 18,
    color: '#555555',
    fontFamily: 'Poppins-Regular',
    marginLeft: 2,
  },
  badge: {
    fontSize: 9,
    fontWeight: '500',
    backgroundColor: '#FFC70047',
    padding: 3,
  },
  discriptipon2: {
    fontSize: 11,
    lineHeight: 16.5,
    color: '#7B7979',
    fontFamily: 'Poppins-Regular',
    marginLeft: 2,
    marginTop: 2,
    marginBottom: 5,
  },
  amenities: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
marginBottom:5,
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
  disbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renttype: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FFC700',
    borderWidth: 1,
    borderColor: '#ffffff',
    left: 15,
    top: 10,
    width: 90,
    alignItems: 'center',
  },
  renttext: {
    fontSize: 12,
    fontWeight: '500',
    padding: 5,
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
    top: 35,
    width: 90,
    alignItems: 'center',
  },
  renttext2: {
    fontSize: 12,
    fontWeight: '500',
    padding: 5,
    fontFamily: 'Poppins-Regular',
    lineHeight: 15,
    color: 'white',
  },

 
  
  mentor: {
    width: 150,
    marginRight: 15,
    borderRadius: 6,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  client: {
    width: 200,
    marginRight: 15,
    borderRadius: 6,
    paddingBottom: 10,
    backgroundColor: 'white',
    marginTop: 35,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 15,
  },
  clienttextparent: {
    marginTop: 5,
  },
  clienttext: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  mentorchild: {
    alignItems: 'center',
    paddingTop: 8,
  },
  clientimage: {
    marginTop: -40,
  },
  mentorview1: { justifyContent: 'center', alignItems: 'center' },
  mentortext: { fontSize: 10, fontFamily: 'Poppins-Regular' },
  mentortext2: { fontSize: 8, fontFamily: 'Poppins-Regular', color: '#8A8A8A' },
  mentorname: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },

  mentorname2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#8A8A8A',
  },
  mentorchild2: {
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,

    justifyContent: 'space-around',
  },
  loanpartner: {
    width: '100%',

    backgroundColor: '#ffffff',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  loanpartnerchild: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    height: 62,
    width: 62,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  addicon: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#01A449',
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  icontext: {
    fontSize: 40,
    paddingBottom: 5,
    color: 'white',
  },
  contactus: {
    height: 35,
    width: 112,
    backgroundColor: '#01A449',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactusparent: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  contactustext: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
  },
  newsimage: {
    marginRight: 10,
  },
  menuparent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  menu: {
    width: 45,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  addiconparent: {
    height: 60,
  },
  menutext: {
    fontSize: 14,
    lineHeight: 21,
    color: '#01A449',
    textAlign: 'center',
    marginTop: 2,
  },
})
const Viewmenu = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 180px;
`

export { styles, Viewmenu }
