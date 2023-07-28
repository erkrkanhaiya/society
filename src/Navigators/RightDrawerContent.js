import React, { useContext, useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components'
import Close from '@/Assets/Icons/Close'
import LanguagePicker from '@/Components/languagePicker/LanguagePicker'
import Faq from '@/Containers/Faq/Faq'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '@/Context/AuthContext'

function RightDrawerContent(props) {
  const authContext = useContext(AuthContext)

  const [faqModal, setFaqModal] = useState(false)
  const [opacity, setOpacity] = useState(1)

  const { t } = useTranslation()

  const routeNames = [
    { name: 'Account Detail', tText: 'account' },
    { name: 'Account Detail', tText: 'accountDetails' },
    // { name: 'Manage Subscription', tText: 'manageSubscription' },
    { name: 'Notifications', tText: 'notifications' },
    { name: 'Contact Support', tText: 'contactSupport' },
    { name: 'Refer a Friend', tText: 'referAFriend' },
    { name: 'Shared Files', tText: 'sharedFiles' },
    { name: 'FAQ', showModal: true, tText: 'faq' },
    { name: 'Sign Out', showModal: true, tText: 'signOut' },
  ]

  return (
    <DrawerContentContainer opacity={opacity} {...props} safeArea>
      <TitleCloseView>
        <StyledText>{t('myAccount')}</StyledText>
        <CloseIconButton
          onPressIn={() => {
            props.navigation.closeDrawer()
          }}
        >
          <Close stroke="rgb(73, 31, 105)" />
        </CloseIconButton>
      </TitleCloseView>
      <LanguagePicker
        setOpacity={setOpacity}
        color={'rgb(73, 31, 105)'}
        navigation={props?.navigation}
      />
      {routeNames.map(({ name, showModal = false, tText }, index) => (
        <MenuItem
          key={tText}
          px="5"
          py="3"
          rounded="md"
          bg={
            index === props.state.index
              ? 'rgba(6, 182, 212, 0.1)'
              : 'transparent'
          }
          onPress={event => {
            if (!showModal) {
              props.navigation.navigate(name)
            } else {
              if (name === 'FAQ') {
                setFaqModal(true)
              } else if (name === 'Sign Out') {
                Alert.alert(t('signOutheading'), '', [
                  {
                    text: t('cancel'),
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: t('signOut'),
                    onPress: () => {
                      authContext.setAuthState({
                        accessToken: null,
                        refreshToken: null,
                        authenticated: false,
                        role: null,
                      })
                    },
                  },
                ])
              }
              props.navigation.closeDrawer()
            }
          }}
        >
          <MenuItemView space="7">
            <StyledText
              fontWeight="500"

              // color={index === props.state.index ? 'red' : 'yellow'}
            >
              {t(tText)}
            </StyledText>
          </MenuItemView>
        </MenuItem>
      ))}
      {faqModal ? <Faq closeModal={setFaqModal} openModal={faqModal} /> : null}
    </DrawerContentContainer>
  )
}

export default RightDrawerContent

const IconContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 243, 255);
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 20px;
`

const DrawerContentContainer = styled(DrawerContentScrollView)`
  padding: 10px;
  background: rgba(255, 255, 255, ${props => props.opacity});
`

const CloseIconButton = styled(TouchableOpacity)`
  padding: 10px;
  background: transparent;
`

const MenuItem = styled(TouchableOpacity)`
  align-items: flex-start;
  margin: 10px;
`
const MenuItemView = styled(View)`
  flex-direction: row;
  align-items: center;
  color: #fff;
  margin-bottom: 15px;
`

const TitleCloseView = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

const StyledText = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  color: rgb(73, 31, 105);
`
