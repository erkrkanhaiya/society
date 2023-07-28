import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Daily, { DailyMediaView } from '@daily-co/react-native-daily-js'

const VideoCall = ({ chatRoomId }) => {
  const [participant, setParticipant] = useState({})
  useEffect(() => {
    // Start joining a call
    const call = Daily.createCallObject()
    let url = 'https://' + 'mysupportroom' + '.daily.co/SR-' + chatRoomId
    console.log(
      '🚀 ~ file: VideoCall.js ~ line 14 ~ useEffect ~ url',
      JSON.stringify(url),
    )
    call.join({
      url,
    })

    // Listen for events signaling changes to participants or their audio or video.
    // - 'participant-joined' and 'participant-left' are for remote participants only
    // - 'participant-updated' is for the local participant as well as remote participants
    const events = [
      'participant-joined',
      'participant-updated',
      'participant-left',
    ]
    for (const event of events) {
      call.on(event, () => {
        for (const currParticipant of Object.values(call.participants())) {
          console.log('---')
          console.log(`currParticipant ${currParticipant.user_id}:`)
          if (currParticipant.local) {
            setParticipant(currParticipant)
          }
          //   if (participant.local) {
          //     console.log('is local')
          //   }
          //   if (participant.audio) {
          //     console.log('audio enabled', participant.audioTrack)
          //   }
          //   if (participant.video) {
          //     console.log('video enabled', participant.videoTrack)
          //   }
        }
      })
    }
  }, [])

  //   return (
  //     <View>
  //       <Text>VideoCall</Text>
  //     </View>
  //   )

  return (
    <DailyMediaView
      videoTrack={participant.videoTrack}
      audioTrack={participant.audioTrack}
      mirror={participant.local}
      zOrder={participant.local ? 1 : 0}
      // style={someStyle}
      style={styles.media}
      objectFit="cover"
    />
  )
}

export default VideoCall

const styles = StyleSheet.create({
  media: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    // flex: 1,
  },
})

// import { View, Text } from 'react-native'
// import React from 'react'

// const VideoCall = () => {
//   return (
//     <View>
//       <Text>VideoCall</Text>
//     </View>
//   )
// }

// export default VideoCall
