import React, { Fragment, useContext, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Image, Platform, View } from 'react-native';
import { Container } from '@/Styles/Styled-Components';
import { navigate } from '@/Navigators/utils';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HamburgerMenu from '@/Components/HamburgerMenu';
import LogoGreenBlue from '@/Assets/Icons/LogoGreenBlue';
import Account from '@/Assets/Icons/Account';
import Notification from '@/Assets/Icons/Notification';
import Chat from '@/Assets/Icons/Chat';
import CountBadge from '@/Components/atoms/CountBadge/CountBadge';
import CallApi from '@/Util/callApi';
import api from '@/Util/api';
import { useFocusEffect } from '@react-navigation/native';
import { AxiosContext } from '@/Context/AxiosContext';

function AuthLayout({ children, isQuestionnaire, isLogin, ...props }) {

  const { authAxios } = useContext(AxiosContext);

  const [notificationData, setNotificationData] = useState({});
  const [announcementData, setAnnouncementData] = useState({});

  const fetchNotificatios = async () => {
    try {
      const notifications = await CallApi(authAxios, "get", api?.chatroom?.allNotifications(1, 50));
      setNotificationData(notifications);
    } catch (error) {
      setNotificationData({});
    }
  }

  const fetchAnnouncement = async () => {
    try {
      const announcement = await CallApi(authAxios, "get", api?.general?.announcements);
      setAnnouncementData(announcement);
      if (setAnnouncement) {
        setAnnouncement(announcement);
      }
    } catch (error) {
      setAnnouncementData({});
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAnnouncement();
      fetchNotificatios();
    }, []));


  return (
    <Fragment>
      <Header>
        <HeaderContent>
          <HamburgerMenu {...props} />
          <TouchableWithoutFeedback
            onPress={() => {
              navigate('Chatroom');
            }}
          >
            <Chat height={20} width={20} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigate('Chatroom');
            }}
          >
            <LogoGreenBlue />
          </TouchableWithoutFeedback>
          {(notificationData?.total_unread_count) ? <BadgeWrapper>
            <CountBadge count={(notificationData?.total_unread_count)>9?("9+"):(notificationData?.total_unread_count)} />
          </BadgeWrapper> : null}
          <TouchableWithoutFeedback
            onPress={() => {
              navigate('All Notifications', {
                notificationData, announcementData, fetchNotificatios
              });
            }}
          >
            <Notification />
          </TouchableWithoutFeedback>
          <Account {...props} />
        </HeaderContent>
      </Header>
      <MainContainer>{children}</MainContainer>
    </Fragment>
  )
}

export default AuthLayout

const MainContainer = styled(Container)`
  flex: 1;
`

const HeaderContent = styled(View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0px 10px;
  ${Platform.select({
  ios: css`
      // margin-top: 20px;
    `,
  android: css``,
})};
`

export const Logo = styled(Image)`
  width: 140px;
  height: 30px;
`

export const SwitchWrapper = styled(View)`
  color: white;
  font-size: 16px;
  text-align: right;
`

const Header = styled(View)`
  background: ${({ theme }) => theme.primaryLight};

  padding: 5px 0 15px;
`

const BadgeWrapper = styled(View)`
  position:relative;
  top:-8px;
  left:45px;
  z-index:300;
`
