import WelcomeLayout from '@/Layout/WelcomeLayout'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Inputs } from '@/Components'

const Createaccount = ({ route }) => {
  const { t } = useTranslation()
  return (
    <View style={{ flex: 1 }}>
      <WelcomeLayout isLogin isQuestionnaire>
        <Inputs company_unique_id={route?.params?.company_unique_id} />
      </WelcomeLayout>
    </View>
  )
}

export default Createaccount

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
const LoginWrapper = styled(View)`
  /* max-width: 540px; */
`

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
  flex-direction: row;
  align-items: flex-start;
  /* justify-content: s; */
  padding: 0 15px;
  margin: 32px 0;
`

const SignAndLogWrapper = styled(View)`
  text-align: left;
`
