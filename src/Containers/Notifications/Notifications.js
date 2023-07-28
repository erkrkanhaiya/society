import React, { useState, useCallback, useContext } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

import AuthLayout from '@/Layout/AuthLayout'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import Heading from '@/Components/atoms/Heading'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import CallApi from '@/Util/callApi'
import api from '@/Util/api'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '@/Store/User'
import { AxiosContext } from '@/Context/AxiosContext'
import Email from '@/Assets/Icons/Email'
import Sms from '@/Assets/Icons/Sms'
import WhatsApp from '@/Assets/Icons/Whatsimg'
import SwitchBtn from '@/Components/atoms/SwitchBtn/SwitchBtn'

const NotificationBox = ({ icon, text, name, id, val, handler }) => {
  return (
    <NotificationText>
      <TextWrapper>
        {icon()}
        <Text
          style={{
            fontWeight: 'bold',
            color: 'rgb(73, 31, 105)',
            marginLeft: 8,
          }}
        >
          {text}
        </Text>
      </TextWrapper>
      <SwitchBtn name={name} id={id} value={val} handler={handler} />
    </NotificationText>
  )
}

const Notifications = props => {
  const { authAxios } = useContext(AxiosContext)
  const { t } = useTranslation()
  const { notification } = useSelector(({ user }) => {
    return {
      notification: user?.notification,
    }
  })

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const handleToggle = useCallback(
    (id, type, status) => {
      const notificationIndex = notification?.data?.findIndex(
        ({ setting_id }) => setting_id === id,
      )
      const notify = notification?.data[notificationIndex]
      if (notify?.setting_id) {
        updateNotification(notify?.setting_id, type, status === true ? 1 : 0)
      }
    },
    [notification, dispatch],
  )

  const updateNotification = async (id, type, status) => {
    try {
      await CallApi(
        authAxios,
        'post',
        `${api?.patient?.updateNotification}setting_id=${id}&status=${status}&notify_type=${type}`,
      )
      fetchNotification()
      // setLoading(false);
    } catch (err) {
      // setLoading(false);
    }
  }

  const fetchNotification = async () => {
    try {
      await CallApi(
        authAxios,
        'get',
        api?.patient?.notification,
        dispatch,
        setNotification,
      )
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchNotification()
    }, [dispatch]),
  )

  if (loading) {
    return <Loader />
  }

  return (
    <AuthLayout {...props}>
      <Heading
        style={{ marginTop: 15, marginLeft: 12 }}
        align={'left'}
        fontWeight={'bold'}
        fontSize={'25px'}
      >
        {t('notifications')}
      </Heading>
      <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
        {notification?.data?.length &&
          notification?.data?.map(
            ({ email, name, setting_id, sms, whatsapp }) => {
              return (
                <NotificationWrapper key={name}>
                  <Heading
                    align={'left'}
                    style={{ marginBottom: 15, marginTop: 15, marginLeft: 8 }}
                  >
                    {name[0].toUpperCase() + name.slice(1)}
                  </Heading>
                  <NotificationBox
                    icon={() => <Email />}
                    text={t('emailNotifications')}
                    name={'email'}
                    id={setting_id}
                    val={email === 1}
                    handler={handleToggle}
                  />

                  <NotificationBox
                    icon={() => <Sms />}
                    text={t('smsNotifications')}
                    name={'sms'}
                    id={setting_id}
                    val={sms === 1}
                    handler={handleToggle}
                  />
                  <NotificationBox
                    icon={() => <WhatsApp />}
                    text={t('whatsapp')}
                    name={'whatsapp'}
                    id={setting_id}
                    val={whatsapp === 1}
                    handler={handleToggle}
                  />
                </NotificationWrapper>
              )
            },
          )}
      </ScrollView>
    </AuthLayout>
  )
}

const NotificationWrapper = styled(View)`
  border: 1px solid rgb(73, 31, 105);
  border-radius: 8px;
  /* margin: 5px; */
  margin-bottom: 15px;
  padding: 5px;
`

const NotificationText = styled(View)`
  margin: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`

const TextWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default Notifications
