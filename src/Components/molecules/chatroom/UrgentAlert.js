import { StyleSheet, View } from 'react-native'
import React from 'react'
import Button from '@/Components/atoms/Button'

const UrgentAlert = ({
  onPress
}) => {
  return (
    <View>
      <Button
        variant="statusWarning"
        onPress={() => onPress(true)}
        textStyle={styles.textStyle}
        buttonStyles={styles.button}
      >
        Urgent Alert
      </Button>
    </View>
  )
}

export default UrgentAlert

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
  textStyle: {
    fontSize: 11,
    fontWeight: 'bold',
    padding:5
  },
})
