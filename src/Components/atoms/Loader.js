import React, { PureComponent } from 'react'
import { View, Animated, Easing } from 'react-native'
import styled from 'styled-components'
import LoaderCircleBlue from '@/Assets/Icons/LoaderCircleBlue'
import LoaderCircleGreen from '@/Assets/Icons/LoaderCircleGreen'

class Loader extends PureComponent {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
    Animated.loop(
      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
    this.spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    this.spinReverse = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['360deg', '0deg'],
    })

    this.state = {}
  }

  render() {
    return (
      <Wrapper pointerEvents="none">
        <LoadingWrapper>
          <Animated.View style={{ transform: [{ rotate: this.spin }] }}>
            <LoaderCircleBlue />
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              transform: [{ rotate: this.spinReverse }],
            }}
          >
            <LoaderCircleGreen />
          </Animated.View>
        </LoadingWrapper>
      </Wrapper>
    )
  }
}

export default Loader

const Wrapper = styled(View)`
  background: rgba(255, 255, 255, 0.2);
`

const LoadingWrapper = styled(View)`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
`
