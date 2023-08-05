import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  uploadview: {
    borderColor: '#F2F0F0',
    borderWidth: 1,
    borderRadius: 9999,
    height: 120,
    width: 120,
    backgroundColor: '#F6F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  proview: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  proviewchild: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  uploadtext: {
    fontSize: 17,
    marginTop: 10,
    fontFamily: 'poppins',
  },
  container: {
    paddingTop: 15,
    alignItems: 'flex-start',
  },
  containerchild: {
    color: '#706E6E',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  textviewchild: {
    color: '#706E6E',
    fontFamily: 'Poppins-Regular',
  },
  margin:{
    marginTop:20
  },
  viewchild: {
    borderWidth: 1,
    borderColor: '#DAD7D7',
    width: '100%',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 4,
  },

  viewchild2: {
    flexDirection: 'row',
  },
  
})

export { styles }
