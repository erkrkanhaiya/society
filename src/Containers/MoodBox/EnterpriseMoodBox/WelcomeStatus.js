import React from 'react'
import styled from 'styled-components'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

const WelcomeStatus = ({ letsGo }) => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <BigHeader>
          {t('bigHeader')}
          <Text style={{}}>{t('moodbox')}</Text>
        </BigHeader>
        <AfterHeader>{t('afterHeader')}</AfterHeader>
        <StyledSimpleText primary>{t('StyledSimpleText')}</StyledSimpleText>
        <StyledSimpleText>{t('StyledSimpleText2')}</StyledSimpleText>
      </Wrapper>
      <MobileButton onPress={() => letsGo()}>
        <Btntext>{t('letsGo')}</Btntext>
      </MobileButton>
    </>
  )
}

const BigHeader = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  color: #00c8a0;
`

const AfterHeader = styled(Text)`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0;
  text-align: left;
  margin-top: 24px;
`

const StyledSimpleText = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: black;
  margin-top: 18px;
  /* margin: 24px 0; */
`

const Wrapper = styled(View)`
  padding: 30px;
`

const MobileButton = styled(TouchableOpacity)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  background: #00c8a0;
  margin-top: 30px;
`

const Btntext = styled(Text)`
  font-size: 25px;
  font-weight: 900;
  color: white;
`

export default WelcomeStatus
