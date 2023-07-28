import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Delete = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={'#491f69'}
    {...props}
  >
    <Path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#00C8A0"></Path>
  </Svg>
);


export default Delete;
