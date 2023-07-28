import React, { useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components'
import Close from '@/Assets/Icons/Close'
import Chat from '@/Assets/Icons/Chat'
import Mood from '@/Assets/Icons/Mood'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Notification from '@/Assets/Icons/Notification'
import Tracker from '@/Assets/Icons/Tracker'
import WallbeingMeter from '@/Assets/Icons/WallbeingMeter'
import TrainingVideo from '@/Assets/Icons/TrainingVideo'
import Journal from '@/Assets/Icons/Journal'
import AdditionalSupport from '@/Assets/Icons/AdditionalSupport'
import ResourceCenter from '@/Assets/Icons/ResourceCenter'
import TrainingViemoVdo from '../Containers/TrainingVideo/TrainingVideo'

function DrawerContent(props) {
  //   const { signOut, toggleTheme } = React.useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false)

  const { t } = useTranslation()
  const { profile } = useSelector(({ user }) => {
    return {
      profile: user?.profile,
    }
  })

  const routeNames = [
    { Icon: Chat, name: 'Chatroom', tText: 'chatroom' },
    { Icon: Tracker, name: 'Therapy Tracker', tText: 'therapyTracker' },
    { Icon: WallbeingMeter, name: 'Wallbeing Meter', tText: 'wellbeingMeter' },
    // { Icon: ResourceCenter, name: 'Resource Center', tText: "resourceCentre" },
    { Icon: Journal, name: 'Journal', tText: 'journal' },
    {
      Icon: Mood,
      name: 'Mood Box',
      showItem: profile?.moodbox_page_visited ? false : true,
      tText: 'moodBox',
    },
    // { Icon: AdditionalSupport, name: 'Additional Support', tText: "additionalSupport" },
    { Icon: Notification, name: 'Notifications', tText: 'notifications' },
    {
      Icon: TrainingVideo,
      showModal: true,
      name: 'Training Video',
      tText: 'trainingVideo',
    },
  ]

  return (
    <DrawerContentContainer {...props} safeArea>
      <TitleCloseView>
        <StyledText>{t('yourTools')}</StyledText>
        <CloseIconButton
          onPressIn={() => {
            props.navigation.closeDrawer()
          }}
        >
          <Close color="#fff" />
        </CloseIconButton>
      </TitleCloseView>
      {routeNames.map(
        ({ name, Icon, showItem = true, showModal = false, tText }, index) =>
          showItem && (
            <MenuItem
              key={name}
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
                  if (name === 'Training Video') {
                    setOpenModal(true)
                    props.navigation.closeDrawer()
                  }
                }
              }}
            >
              <MenuItemView space="7">
                <IconContainer>
                  <Icon color="#fff" backGround="#fff" />
                </IconContainer>
                <StyledText
                  fontWeight="500"
                  color={index === props.state.index ? 'red' : 'yellow'}
                >
                  {t(tText)}
                </StyledText>
              </MenuItemView>
            </MenuItem>
          ),
      )}
      {openModal ? (
        <TrainingViemoVdo closeModal={setOpenModal} openModal={openModal} />
      ) : null}
    </DrawerContentContainer>
  )
}

export default DrawerContent

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
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 5px;
  background: #513666;
  //   max-width:100px
`

const CloseIconButton = styled(TouchableOpacity)`
  padding: 10px;
`

const MenuItem = styled(TouchableOpacity)`
  align-items: flex-start;
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
  //   margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`
