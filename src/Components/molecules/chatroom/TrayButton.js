import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Orientation, useOrientation } from './useOrientation'
import { robotID } from './VideoPopup'

export default function TrayButton({
  disabled = false,
  onPress,
  muted = false,
  robotId = '',
  text,
  type,
}) {
  const orientation = useOrientation()

  let source = require('../../../Assets/Images/leave.png')
  const isLeaveButton = type === 'leave'
  if (isLeaveButton) {
    robotId = 'robots-leave-button'
  } else if (type === 'camera') {
    robotId = `robots-btn-cam-${muted ? 'mute' : 'unmute'}`
    source = muted
      ? require('../../../Assets/Images/camera-off.png')
      : require('../../../Assets/Images/camera.png')
  } else if (type === 'mic') {
    robotId = `robots-btn-mic-${muted ? 'mute' : 'unmute'}`
    source = muted
      ? require('../../../Assets/Images/mic-off.png')
      : require('../../../Assets/Images/mic.png')
  } else if (type === 'swap') {
    robotId = 'robots-btn-swap'
    source = require('../../../Assets/Images/swap-icon.png')
  }

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={disabled}
      {...robotID(robotId)}
    >
      <View style={styles.controlContainer}>
        <Image
          style={[
            styles.iconBase,
            orientation === Orientation.Portrait
              ? styles.iconPortrait
              : styles.iconLandscape,
            disabled && styles.disabled,
            isLeaveButton && styles.iconLeave,
          ]}
          source={source}
        />
        <Text
          style={[
            styles.controlText,
            (muted || isLeaveButton) && styles.offText,
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  iconBase: {
    height: 32,
    width: 32,
    // backgroundColor: 'grey',
  },
  iconPortrait: {
    marginHorizontal: 16,
  },
  iconLandscape: {
    marginTop: 16,
  },
  iconLeave: {
    height: 28,
    width: 36,
  },
  disabled: {
    opacity: 0.6,
  },
  controlContainer: {
    alignItems: 'center',
  },
  controlText: {
    fontWeight: '500',
    paddingTop: 4,
    color: 'blue',
  },
  offText: {
    color: 'red',
  },
})
