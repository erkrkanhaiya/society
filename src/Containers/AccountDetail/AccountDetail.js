import React, { useState, useCallback } from 'react'
import { Button, Text, View } from 'react-native'

import AuthLayout from '@/Layout/AuthLayout';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Heading from '@/Components/atoms/Heading';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const AccountDetail = props => {
  const { t } = useTranslation()

  const { profile } = useSelector(({ user }) => {
    return {
      profile: user?.profile,
    }
  })

  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      promise
        .then(res => {
          return res
        })
        .then(resData => {
          setTimeout(() => {
            setLoading(!resData)
          }, 1000)
        })
        .catch(err => {})
    }, []),
  )

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })

  if (loading) {
    return <Loader />
  }

  const accountArr = [
    { name: t("fullName"), value: profile?.first_name + " " + profile?.last_name },
    { name: t("nickname"), value: profile?.nickname || t("notSet") },
    { name: t("emailAddress"), value: profile?.email || t("notSet") },
    { name: t("phoneNumber"), value: profile?.mobile || t("notSet") },
    { name: t("dateOfBirth"), value: profile?.date_of_birth || t("notSet") },
    { name: t("anonymousProfile?"), value: profile?.anonymous === 1 ? t("yes") : t("no") },
    { name: t("twoFactorAuthentication"), value: profile["2fa_active"] === 1 ? t("activated") : t("deactivated") }
  ];

  return (
    <AuthLayout {...props}>
      <ViewContainer>
        <Heading>{t("accountDetails")}</Heading>
        {accountArr.map(({ name, value }) => {
          return (
            <ViewStyles key={name}>
              <AccountKey>
                <TextStyles>{name}</TextStyles>
              </AccountKey>
              <AccountValue>
                <TextStyles>{value}</TextStyles>
              </AccountValue>
            </ViewStyles>
          )
        })}
        <Button title={t("edit")} onPress={() => {
          props.navigation.navigate("Edit Account")
        }} color="rgb(73, 31, 105)" />
      </ViewContainer>
    </AuthLayout>
  )
};

const ViewContainer = styled(View)`
  margin:10px;
`
const ViewStyles = styled(View)`
  flex-direction:row;
  margin:8px;
`
const AccountKey = styled(View)`
  width:50%;
`
const AccountValue = styled(View)`
  width:50%;
`
const TextStyles = styled(Text)`
  margin: 15px;
  font-weight: bold;
`
export default AccountDetail
