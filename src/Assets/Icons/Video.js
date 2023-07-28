import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Video = props => (
  <Svg
    width={28}
    height={23}
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.125 5.125V2.875C17.125 2.27826 16.8879 1.70597 16.466 1.28401C16.044 0.862053 15.4717 0.625 14.875 0.625H2.5C1.90326 0.625 1.33097 0.862053 0.90901 1.28401C0.487053 1.70597 0.25 2.27826 0.25 2.875V14.125C0.25 14.7217 0.487053 15.294 0.90901 15.716C1.33097 16.1379 1.90326 16.375 2.5 16.375H14.875C15.4717 16.375 16.044 16.1379 16.466 15.716C16.8879 15.294 17.125 14.7217 17.125 14.125V11.875L22.75 16.375V0.625L17.125 5.125Z"
      fill="#491F69"
    />
  </Svg>
)
export default Video
