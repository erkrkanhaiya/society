import * as React from 'react'
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components';

const Account = props => (
  <AccountMenuButton  onPressIn={() => {
    props.navigation.getParent().openDrawer();
  }}>
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z"
        fill="#491F69"
      />
    </Svg>
  </AccountMenuButton>
);

const AccountMenuButton = styled(TouchableOpacity)`
  padding: 10px;
`

export default Account
