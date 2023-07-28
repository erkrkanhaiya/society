import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */

const LoaderCircleGreen = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <Circle
      cx={50}
      cy={50}
      r={23}
      strokeWidth={8}
      stroke="#00c8a0"
      strokeDasharray="36.12831551628262 36.12831551628262"
      strokeDashoffset={36.12831551628262}
      fill="none"
      strokeLinecap="round"
    />
  </Svg>
)

export default LoaderCircleGreen
