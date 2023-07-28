import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */

const LoaderCircleBlue = () => (
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
      r={32}
      strokeWidth={8}
      stroke="#491f69"
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    />
  </Svg>
)

export default LoaderCircleBlue
