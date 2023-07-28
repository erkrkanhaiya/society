import WelcomeLayout from '@/Layout/WelcomeLayout'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Login = props => {
  const { t } = useTranslation()
  return (
    <WelcomeLayout isLogin isQuestionnaire {...props}>
      <MainSectionWrapper>
        <ActionsHeader>
          <SubHeader>{t('subHeader')}</SubHeader>
          <MainHeader>{t('mainHeader')}</MainHeader>
        </ActionsHeader>
        {/* <StyledTabs>
              <StyledTab>{t('login')}</StyledTab>
            </StyledTabs> */}
        <LoginForm />
      </MainSectionWrapper>
    </WelcomeLayout>
  )
}

export default Login

const StyledTabs = styled(View)`
  margin-top: 45px;
  padding-bottom: 5px;
  border-bottom-width: 5px;
  border-color: rgb(0, 200, 160);
  border-style: solid;
  width: 168px;
`

const StyledTab = styled(Text)`
  text-align: center;
  opacity: 0.5;
  font-size: 16px;
  font-weight: 600;
  opacity: 1;
`
// &:hover {
//   border-bottom: 5px solid #00c8a0;
// }

const ActionsHeader = styled(View)`
  width: 100%;
`

const SubHeader = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;

  color: #491f69;
`
const MainHeader = styled(Text)`
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
  color: #00c8a0;
`
const MainSectionWrapper = styled(View)`
  display: flex;
  /* align-items: flex-start; */
  /* justify-content: center; */
  padding: 0 15px;
  margin: 32px 0;
`
