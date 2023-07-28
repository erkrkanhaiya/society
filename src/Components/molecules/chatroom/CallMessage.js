import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function CallMessage(props) {
  return (
    <View style={[styles.container, props.isError && styles.errorContainer]}>
      <View style={styles.textRow}>
        {props.isError && (
          <Image source={require('../../../Assets/Images/error.png')} />
        )}
        <Text
          style={[
            styles.text,
            styles.headerText,
            props.isError ? styles.errorText : {},
          ]}
        >
          {props.header}
        </Text>
      </View>
      {props.detail && <Text style={styles.text}>{props.detail}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorContainer: {
    backgroundColor: 'grey',
  },
  text: {
    fontSize: '14px',
    textAlign: 'center',
    color: 'blue',
  },
  headerText: {
    fontWeight: 'bold',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  errorText: {
    color: 'red',
    marginLeft: 8,
  },
})
