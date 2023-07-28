import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import styled from 'styled-components'
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
  },
  view1child: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.47,
  },
  view1child2: {
    padding: 25,
  },
  textparent: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    lineHeight: 36,
    fontFamily: 'Poppins-Regular',
  },
  textchild: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
  },
  view2: {
    flex: 1.5,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -40,
    padding: 25,
  },
  textview: {
    marginTop: 10,
  },
  button: {
    marginTop: 40,
  },
  textviewchild: {
    color: '#706E6E',
    fontFamily: 'Poppins-Regular',
  },
})
const Mainparent = styled(View)`
  flex: 1;
`
export { Mainparent, styles }
