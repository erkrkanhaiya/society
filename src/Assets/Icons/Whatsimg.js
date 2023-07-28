import * as React from 'react'
import { Image } from 'react-native'
import Wtsicon from '@/Assets/Images/wtsicon.png'

const WhatsApp = props => (
  <Image
    source={require('../Images/wtsicon.png')}
    style={{
      width: 20,
      height: 20,
    }}
    resizeMode="contain"
  />
)

export default WhatsApp
