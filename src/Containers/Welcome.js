import { MainSectionWrapper, TextBlock } from '@/Styles/Styled-Components'
import React from 'react'
import { Image, Platform, Text, View } from 'react-native'
import styled, { css } from 'styled-components'
import AdamImage from '@/Assets/Images/panagiotis_karagiannis.jpg'
import WelcomeLayout from '@/Layout/WelcomeLayout'
import { useTranslation } from 'react-i18next'
import { Button, ChevronIcon } from '@/Components'
import { navigate } from '@/Navigators/utils'

const therapistMeta = {
  image: AdamImage,
  name: 'Panagiotis Karagiannis',
  description: 'certifiedTherapist',
}

function Welcome(props) {
  const { t } = useTranslation()
  return (
    <>
      <WelcomeLayout {...props}>
        <MainSectionWrapper>
          <WelcomeContainer>
            {/* <TextBlock.BoldPrimaryText style={{ fontSize: 17 }}>
              {t('firstStep')}{' '}
              <Text style={{ color: '#491f69' }}>{t('happiness')}</Text>{' '}
              {t('today')}
            </TextBlock.BoldPrimaryText> */}
            {/* <ImageWrapper>
              <TherapistImage>
                <BlendColor />
                <ProfilePic source={therapistMeta.image} />
              </TherapistImage>
              <TherapistDescription>
                <TherapistName>{therapistMeta.name}</TherapistName>
                <TherapistCertification>
                  {t(therapistMeta.description)}
                </TherapistCertification>
              </TherapistDescription>
            </ImageWrapper> */}
            {/* <TherapistComment>
              <TherapistCommentText style={{ fontSize: 13, paddingTop: 20 }}>
                <FirstQuote>&ldquo;</FirstQuote>
                <Text>{t('myDesc')} </Text>{' '}
                <Text>
                  {t('qna')}
                  <LastQuote>&rdquo;</LastQuote>
                </Text>{' '}
              </TherapistCommentText>
            </TherapistComment> */}
          </WelcomeContainer>

          <CustomButton
            variant="secondary"
            onPress={() => {
              navigate('Login')
            }}
          >
            {t('Login')}
          </CustomButton>


          <CustomButton
            variant="secondary"
            onPress={() => {
              navigate('Createaccount')
            }}
          >
            {t('Signup')}
          </CustomButton>
        </MainSectionWrapper>
      </WelcomeLayout>
    </>
  )
}

export default Welcome

const CustomButton = styled(Button)`
  // position: absolute;
  top: 50px;
  margin-bottom: 5%;
  padding: 15px 15px;
  /* border-radius: 12px; */
  width: 100%;
  font-size: x-large;
`

const WelcomeContainer = styled(View)`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 0px;
`

const ImageWrapper = styled(View)`
  overflow: hidden;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
`

const TherapistImage = styled(View)`
  position: relative;
  overflow: hidden;
  border-radius: 50px;
  width: 100px;
  height: 100px;
`

const BlendColor = styled(View)`
  background: #bbc8f4;
  height: 150px;
  width: 150px;
  left: 0;
  mix-blend-mode: difference;
  position: absolute;
  top: 0;
`

const ProfilePic = styled(Image)`
  width: 110px;
  height: 100px;
  border-radius: 70px;

  margin-bottom: 20px;
`

const TherapistDescription = styled(View)`
  width: 100%;
  margin-top: 10px;
`

const TherapistName = styled(Text)`
  font-weight: bold;
  font-size: 15px;
  justify-content: center;

  color: ${({ theme }) => theme.color.primary};
`

const TherapistCertification = styled(Text)`
  justify-content: center;
  align-self: center;
  font-size: 14px;

  color: ${({ theme }) => theme.color.primary};
`

const TherapistComment = styled(View)`
  margin-top: 15px !important;
  display: flex;
  border-radius: 8px;
  background: rgb(247, 241, 255);
  z-index: 20;
`

const TherapistCommentText = styled(TextBlock.NormalText)`
  text-align: left;
  line-height: 20px;
  color: gray;
`

const FirstQuote = styled(Text)`
  font-size: 20px;
  font-weight: bold;

  ${Platform.select({
    ios: css`
      font-family: System;
      font-weight: bold;
    `,
  })};
`

const LastQuote = styled(Text)`
  font-size: 20px;
  font-weight: bold;

  ${Platform.select({
    ios: css`
      font-family: System;
      font-weight: bold;
    `,
  })};
`

// position: absolute;
// left: 0;
