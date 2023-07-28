import React, { useState, useCallback } from 'react';
import { Text } from 'react-native';

import AuthLayout from '@/Layout/AuthLayout';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';

const Analytics = props => {
  
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

  return (
    <AuthLayout {...props}>
      <Text>Analytics</Text>
    </AuthLayout>
  )
};
export default Analytics
