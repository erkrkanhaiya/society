import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import logo from '@/Assets/Images/support-room-logo-light-final.png'
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Container } from '@/Styles/Styled-Components'
import { Button, ChevronIcon } from '@/Components'
import { goBack, navigate } from '@/Navigators/utils'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import LanguagePicker from '@/Components/languagePicker/LanguagePicker'
import { useTranslation } from 'react-i18next'

function WelcomeLayout({ navigation, children, isQuestionnaire, isLogin }) {
  const { t } = useTranslation()
  const [opacity, setOpacity] = useState(1)
  const handleGoBack = () => {
    navigation.goBack(null)
  }

  return (
    <>
      <Header>
        {/* <LogoView>
          <TouchableWithoutFeedback onPress={() => navigate('Welcome')}>
            <Logo style={{ resizeMode: 'contain' }} source={logo} />
          </TouchableWithoutFeedback>
        </LogoView> */}
        {isQuestionnaire && (
          <BackButton>
            <TouchableWithoutFeedback onPress={handleGoBack}>
              <ChevronIcon dir="left" />
            </TouchableWithoutFeedback>
          </BackButton>
        )}
        <HeaderContent>
          {/* {isLogin && (
            <Logout>
              <TouchableOpacity
                onPress={() => {
                  alert('logout')
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </Logout>
          )} */}
          <ActionWrapper>
            <LanguageWrapper
            // style={{
            //   marginLeft: !isLogin ? 120 : 280,
            // }}
            >
              <LanguagePicker setOpacity={setOpacity} navigation={navigation} />
            </LanguageWrapper>
            {/* {!isLogin && (
              <CustomButton
                variant="secondary"
                onPress={() => navigate('Login')}
              >
                {t('signINBtn')}
              </CustomButton>
            )} */}
          </ActionWrapper>
        </HeaderContent>
      </Header>
      <MainContainer
        style={{
          backgroundColor: opacity === 1 ? 'transparent' : 'rgba(0,0,0,0.2)',
          height: Dimensions.get('screen').height,
        }}
      >
        {children}
      </MainContainer>
    </>
  )
}

export default WelcomeLayout

const Logout = styled(View)`
  // padding: 0 10px;
  // margin: 15px 0;
  // align-self: flex-end;
`

const ActionWrapper = styled(View)`
  // padding: 0 10px;
  // margin: 15px 0;
  // align-self: flex-end;
  // align-items: flex-end;
  // justify-content: flex-end;
  flex-direction: row;
`

const MainContainer = styled(Container)``

const CustomButton = styled(Button)`
  right: 15px;
  padding: 5px 12px;
  top: 5px;
  border-radius: 4px;
`

const HeaderContent = styled(View)`
  align-items: center;
  // align-items: center;
  justify-content: space-between;
  margin-left: 22px;
  // margin-right: 22px;
  display: flex;
  flex-direction: row;
  ${Platform.select({
    ios: css`
      // margin-top: 20px;
    `,
    android: css``,
  })};
`

const BackButton = styled(View)`
  color: white;
  position: absolute;
  left: 20px;
  cursor: pointer;
  top: 10px;
  justify-self: center;
`

const LogoView = styled(View)`
  position: absolute;
  left: 30%;
`

const LanguageWrapper = styled(View)`
  // margin-left: 250px;
`

export const Logo = styled(Image)`
  width: 140px;
  height: 30px;
  margin-bottom: 10px;
`

export const SwitchWrapper = styled(View)`
  color: white;
  font-size: 16px;
  text-align: right;
`

const Header = styled(View)`
  background: tomato; //#491f69;
  padding: 0 0 15px 5px;
  flex-direction: row;
  align-items: center;

  justify-content: flex-end;
`
