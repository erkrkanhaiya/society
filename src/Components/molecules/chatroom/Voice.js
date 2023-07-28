const Sound = require('react-native-sound')

import { View, Button, Platform } from 'react-native'
import React from 'react'

const Voice = ({ link }) => {
  console.log('🚀 ~ file: Voice.js ~ line 7 ~ Voice ~ link', link)
  function playSound() {
    Sound.setCategory('Playback')
    var myRemoteSound = new Sound(
      decodeURIComponent(link),
      '',
      error => {
        if (error) {
          console.log(error)
          return
        } else {
          myRemoteSound.play(success => {
            if (success) {
              console.log('Sound playing')
            } else {
              console.log('Issue playing file')
            }
          })
        }
      },
      {
        preserveEncoding: true,
      },
    )
    myRemoteSound.setVolume(0.9)
    myRemoteSound.release()
  }
  return (
    <View>
      <Button title="play me" onPress={playSound} />
    </View>
  )
}

export default Voice

function getSoundName(name) {
  return Platform.OS === 'ios' ? name + '.aiff' : name + '.mp3'
}
