import styled from 'styled-components'
import { View } from 'react-native'

const Container = styled(View)`
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding: 0 ${({ theme }) => theme.spacing};
`

export default Container
