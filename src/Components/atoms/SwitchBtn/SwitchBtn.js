import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Switch, View } from 'react-native'
import styled from 'styled-components'

const SwitchBtn = ({ handler, id, name, value }) => {
  const [isOn, setIsOn] = useState(false)

  useFocusEffect(
    useCallback(() => {
      setIsOn(value)
    }, [value]),
  )

  return (
    <SwitchBtnContainer>
      <Switch
        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        ios_backgroundColor="red"
        trackColor={{ true: 'green', false: 'red' }}
        thumbColor={'white'}
        onChange={() => {
          handler(id, name, !isOn)
          setIsOn(!isOn)
        }}
        value={isOn}
      ></Switch>
    </SwitchBtnContainer>
  )
}

const SwitchBtnContainer = styled(View)`
  display: flex;
  height: 15px;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`

export default SwitchBtn
