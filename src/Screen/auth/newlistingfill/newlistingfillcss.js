import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  navtext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    paddingVertical: 10,
    marginLeft: 15,
  },
  mainview: {
    padding: 5,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 9,
    padding: 15,
  },
  mainviewtext: {
    fontSize: 16,
    color: '#575656',
    margin: 5,
  },
  input: {
    height: 35,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#88878740',
    padding: 10,
    marginBottom: 25,
  },
  image: {
    borderRadius: 6,
    marginTop: 15,
    paddingBottom: 10,
  },
  button: {
    width: 178,
    height: 50,
    backgroundColor: '#01A449',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 40,
  },
  buttontext: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 5,
  },
})
export { styles }
