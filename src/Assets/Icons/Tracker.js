import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Tracker = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={'#491f69'}
    {...props}
  >
    <Path d="M14 0H12V7.9L14 5.9V0ZM0 0H2V16H0V0ZM6 0H8V4H6V0ZM6 6H8V10H6V6ZM6 12H8V16H6V12ZM18.56 8.59L17.41 7.44C17.2714 7.29971 17.1064 7.18833 16.9244 7.1123C16.7424 7.03628 16.5472 6.99714 16.35 6.99714C16.1528 6.99714 15.9576 7.03628 15.7756 7.1123C15.5936 7.18833 15.4286 7.29971 15.29 7.44L10 12.73V16H13.27L18.56 10.71C19.15 10.12 19.15 9.17 18.56 8.59ZM12.58 14.45H11.55V13.42L15 9.97L16.03 11L12.58 14.45Z"/>

  </Svg>
)

export default Tracker;
