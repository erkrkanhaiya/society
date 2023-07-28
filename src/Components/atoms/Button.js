import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import styled from 'styled-components/native'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const ButtonContainer = styled.TouchableOpacity`
  elevation: 8;
  border-radius: 4px;
  background-color: ${({ theme, variant }) => theme.color[variant]};
`

const ButtonText = styled(Text)`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #fff;
  align-self: center;
  font-family: ${({ theme }) => theme.primaryFontFamily};
`

function Button({
  variant,
  onPress,
  children,
  buttonStyles,
  textStyle,
  isLoading = false,
  ...props
}) {
  return (
    <ButtonContainer
      onPress={onPress}
      variant={variant}
      style={buttonStyles}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText style={textStyle}>{children}</ButtonText>
      )}
    </ButtonContainer>
  )
}

export default Button
