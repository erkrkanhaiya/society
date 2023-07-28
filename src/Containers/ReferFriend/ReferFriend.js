import React, { useState, useCallback } from 'react'
import { Alert, Button, View, TouchableOpacity, Text } from 'react-native'

import AuthLayout from '@/Layout/AuthLayout'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import InputBox from '@/Components/atoms/InputBox/InputBox'
import Heading from '@/Components/atoms/Heading'
import { useTranslation } from 'react-i18next'
import { validateEmail } from '@/Util/Util'
import CallApi from '@/Util/callApi'
import { useContext } from 'react'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import styled from 'styled-components'

const ReferFriend = props => {
  const { authAxios } = useContext(AxiosContext)

  const { t } = useTranslation()

  const [loading, setLoading] = useState(true)

  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    msg: '',
  })

  const [err, setErr] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)

  const handler = useCallback(
    (name, val) => {
      if (!/^\s/.test(val)) {
        if (name === 'email') {
          if (validateEmail(val)) {
            setIsEmailValid(true)
          } else {
            setIsEmailValid(false)
          }
        }
        setInputData({
          ...inputData,
          [name]: val,
        })
      }
    },
    [inputData],
  )

  const inputArr = [
    {
      name: 'name',
      label: t('friendsName'),
      value: inputData?.name,
      handler,
      error: err && !inputData?.name,
      errName: '',
    },
    {
      name: 'email',
      label: t('friendsEmailAddress'),
      value: inputData?.email,
      handler,
      error: (err && !inputData?.email) || !isEmailValid,
      errName: '',
    },
    {
      name: 'msg',
      label: t('Message'),
      value: inputData?.msg,
      handler,
      multiline: true,
      height: 200,
      numberOfLines: 12,
      error: err && !inputData?.msg,
      errName: '',
    },
  ]

  const submit = useCallback(() => {
    const { name, email, msg } = inputData
    if (name && email && msg) {
      setErr(false)
      setIsBtnDisabled(true)
      submitForm({ email, message: msg, name })
    } else {
      setErr(true)
    }
  }, [inputData])

  const submitForm = async data => {
    try {
      const contactUs = await CallApi(
        authAxios,
        'post',
        api?.patient?.referAFriend,
        null,
        null,
        data,
      )
      setInputData({
        name: '',
        email: '',
        msg: '',
      })
      setIsBtnDisabled(false)
      Alert.alert(contactUs?.message)
    } catch (error) {}
  }

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
    }, 500)
  })

  if (loading) {
    return <Loader />
  }

  return (
    <AuthLayout {...props}>
      <ReferWrapper>
        <Heading
          style={{
            fontSize: 20,
            fontWeight: '800',
            marginLeft: 5,
            marginBottom: 15,
            alignSelf: 'flex-start',
          }}
        >
          {t('referAFriend')}
        </Heading>
        {inputArr.map(elem => {
          return <InputBox key={elem.name} {...elem} />
        })}
        <TouchableOpacity
          onPress={submit}
          disabled={isBtnDisabled}
          style={{
            backgroundColor: '#004d00',
            width: 100,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            marginTop: 10,
            marginLeft: 4,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '700',
            }}
          >
            {t('send')}
          </Text>
        </TouchableOpacity>
      </ReferWrapper>
    </AuthLayout>
  )
}

const ReferWrapper = styled(View)`
  margin: 10px;
`

export default ReferFriend
