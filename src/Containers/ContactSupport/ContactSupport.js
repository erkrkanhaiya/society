import React, { useState, useCallback } from 'react'
import { Alert, Button, View, Text, TouchableOpacity } from 'react-native'

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

const ContactSupport = props => {
  const { authAxios } = useContext(AxiosContext)

  const { t } = useTranslation()

  const [loading, setLoading] = useState(true)

  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    sub: '',
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
      label: t('name'),
      value: inputData?.name,
      handler,
      error: err && !inputData?.name,
      errName: '',
    },
    {
      name: 'email',
      label: t('email_Address'),
      value: inputData?.email,
      handler,
      error: (err && !inputData?.email) || !isEmailValid,
      errName: '',
    },
    {
      name: 'sub',
      label: t('subject'),
      value: inputData?.sub,
      handler,
      error: err && !inputData?.sub,
      errName: '',
    },
    {
      name: 'msg',
      label: t('Message'),
      value: inputData?.msg,
      placeHolder: t('messagePlaceholder'),
      handler,
      multiline: true,
      height: 150,
      numberOfLines: 18,
      error: err && !inputData?.msg,
      errName: '',
    },
  ]

  const submit = useCallback(() => {
    const { name, email, sub, msg } = inputData
    if (name && email && sub && msg) {
      setErr(false)
      setIsBtnDisabled(true)
      submitForm({ email, message: msg, name, subject: sub })
    } else {
      setErr(true)
    }
  }, [inputData])

  const submitForm = async data => {
    try {
      const contactUs = await CallApi(
        authAxios,
        'post',
        api?.patient?.contactUs,
        null,
        null,
        data,
      )
      setInputData({
        name: '',
        email: '',
        sub: '',
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
      <ContactWrapper>
        <Heading
          style={{
            fontSize: 20,
            fontWeight: '800',
            marginLeft: 5,
            marginBottom: 10,
            alignSelf: 'flex-start',
          }}
        >
          {t('contactSupport')}
        </Heading>
        {inputArr.map(elem => {
          return <InputBox key={elem.name} {...elem} />
        })}
        <TouchableOpacity
          onPress={submit}
          disabled={isBtnDisabled}
          style={{
            backgroundColor: 'rgb(73, 31, 105)',
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
      </ContactWrapper>
    </AuthLayout>
  )
}

const ContactWrapper = styled(View)`
  margin: 10px;
`

export default ContactSupport
