import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Chat = props => (
  <Svg
    width={props?.width || 24}
    height={props?.height || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill={'#491f69'}
  >
    <Path d="M5 18V21.766L6.515 20.857L11.277 18H16C17.103 18 18 17.103 18 16V8C18 6.897 17.103 6 16 6H4C2.897 6 2 6.897 2 8V16C2 17.103 2.897 18 4 18H5ZM4 8H16V16H10.723L7 18.234V16H4V8Z" />
    <Path d="M20 2H8C6.897 2 6 2.897 6 4H18C19.103 4 20 4.897 20 6V14C21.103 14 22 13.103 22 12V4C22 2.897 21.103 2 20 2Z" />
  </Svg>
)

export default Chat
