import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Close = props => (
  <Svg
    width={(props?.width)||"20px"}
    height={(props?.height)||"20px"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="none"
      stroke={(props?.stroke)||"#fff"}
      strokeWidth={2.5}
      d="M3,3 L21,21 M3,21 L21,3"
    />
  </Svg>
)

export default Close
