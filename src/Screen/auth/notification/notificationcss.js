import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { exp } from 'react-native-reanimated'
import styled from 'styled-components'

const styles = StyleSheet.create({
  day: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 15,
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  navtext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    paddingVertical: 10,
    marginLeft: 15,
    textAlign: 'center',
  },
  touchview: {
    marginTop: 30,
    borderColor: '#EBEBEB',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  touchviewchild: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 13,
    color: '#2D4971',
  },
  text2: {
    marginLeft: 10,
  },
  view: {
    marginTop: 15,
  },
  view2: {
    fontSize: 12,
  },
})
export { styles }
