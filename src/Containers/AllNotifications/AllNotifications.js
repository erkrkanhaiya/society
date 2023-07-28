import React, { useState, useCallback, useContext } from 'react';
import { Alert, ScrollView } from 'react-native';
import AuthLayout from '@/Layout/AuthLayout';
import CallApi from '@/Util/callApi';
import api from '@/Util/api';
import Heading from '@/Components/atoms/Heading';
import { useTranslation } from 'react-i18next';
import NotificationCard from './NotificationCard';
import Announcement from './Announcement';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { AxiosContext } from '@/Context/AxiosContext';

const AllNotifications = props => {
  const route = useRoute();
  const { authAxios } = useContext(AxiosContext);
  const { t } = useTranslation();

  const [notificationData, setNotificationData] = useState({});
  const [announcementData, setAnnouncementData] = useState({});

  const onMarkRead = async (uid) => {
    try {
      const markAsRead = await CallApi(authAxios, "post", api?.chatroom?.readNotification(uid));
      route.params.fetchNotificatios();
      Alert.alert(markAsRead?.message);
    } catch (error) { }
  }

  const markAsRead = useCallback((id) => {
    onMarkRead(id);
  }, [onMarkRead]);

  useFocusEffect(
    useCallback(() => {
      setNotificationData(route?.params?.notificationData);
      setAnnouncementData(route?.params?.announcementData);
    }, [route?.params]));

  return (
    <AuthLayout
      {...props}>
      {/* <Announcement announcementData={announcementData}/> */}
      <Heading>{t("notifications")}</Heading>
      <ScrollView>
        {(notificationData?.data?.length) ?
          notificationData?.data?.map((e) => {
            return (
              <NotificationCard
                markAsRead={markAsRead}
                key={e?.id} {...e} />
            )
          })
          : null}
      </ScrollView>
    </AuthLayout>
  )
};
export default AllNotifications;
