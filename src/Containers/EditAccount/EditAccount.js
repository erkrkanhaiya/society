import React, { useState, useCallback } from 'react';
import AuthLayout from '@/Layout/AuthLayout';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Heading from '@/Components/atoms/Heading';
import ChangePassword from './ChangePassword/ChangePassword';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import TopTabNavigation from '@/Screen/TopTabNavigation/TopTabNavigation';
import styled from 'styled-components';
import { View } from 'react-native';

const EditAccount = props => {

  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      promise.then((res) => {
        return res
      }).then((resData) => {
        setTimeout(() => {
          setLoading(!resData);
        }, 1000);
      }).catch((err) => {

      });
    }, []))

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  })

  if (loading) {
    return <Loader />
  }

  const tabData = {
    initialRoute: t("personalInfo"),
    tintColor: "rgb(73, 31, 105)",
    bgColor: "white",
    screen: [
      { screenName: t("personalInfo"), component: PersonalInfo },
      { screenName: t("changePassword"), component: ChangePassword }
    ]
  };

  return (
    <AuthLayout {...props}>
      <AccountWrapper>
        <Heading>{t("editAccountDetails")}</Heading>
      </AccountWrapper>
        <TopTabNavigation tabData={tabData} />
    </AuthLayout>
  )
};

const AccountWrapper=styled(View)`
  margin:10px;
`

export default EditAccount;
