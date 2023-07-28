import React, { Fragment, useRef, useState, useCallback } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import InputBox from '@/Components/atoms/InputBox/InputBox'
import { useTranslation } from 'react-i18next'
import CallApi from '@/Util/callApi'
import { useContext } from 'react'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useSelector } from 'react-redux'
import PhoneInput from 'react-native-phone-number-input'
import styled from 'styled-components'
import { countryList } from '@/Util/countryList'

const PersonalInfo = props => {
  const { authAxios } = useContext(AxiosContext)

  const { profile } = useSelector(({ user }) => {
    return {
      profile: user?.profile,
    }
  })

  const phoneInput = useRef(null)

  const { t } = useTranslation()

  const [loading, setLoading] = useState(true)

  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    nickName: '',
    phoneNumber: '',
    isAnnoymous: false,
    dob: '',
    twoFA: false,
    countryCode: 'IN',
    dialCode: '91',
  })

  const [err, setErr] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)

  const handler = useCallback(
    (name, val) => {
      if (!/^\s/.test(val)) {
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
      name: 'firstName',
      label: t('first_Name'),
      value: inputData?.firstName,
      handler,
      error: err && !inputData?.firstName,
    },
    {
      name: 'lastName',
      label: t('last_Name'),
      value: inputData?.lastName,
      handler,
      error: err && !inputData?.lastName,
    },
    {
      name: 'nickName',
      label: t('nick_name'),
      value: inputData?.nickName,
      handler,
    },
  ]

  const submit = useCallback(() => {
    const {
      firstName,
      lastName,
      nickName,
      phoneNumber,
      isAnnoymous,
      dob,
      twoFA,
    } = inputData
    if (firstName && lastName) {
      setErr(false)
      setIsBtnDisabled(true)
      submitForm({
        // ...profile,
        first_name: firstName,
        last_name: lastName,
        mobile: phoneNumber,
        nickname: nickName,
        anonymous: isAnnoymous ? 1 : 0,
        date_of_birth: dob,
        two_factor: twoFA,
      })
    } else {
      setErr(true)
    }
  }, [inputData])

  const submitForm = async data => {
    try {
      const personalInfo = await CallApi(
        authAxios,
        'post',
        api?.patient?.profile,
        null,
        null,
        data,
      )
      setInputData({
        firstName: '',
        lastName: '',
        nickName: '',
        phoneNumber: '',
        isAnnoymous: false,
        dob: '',
        twoFA: false,
        countryCode: 'IN',
      })
      setIsBtnDisabled(false)
      Alert.alert(personalInfo?.message)
      props.navigation.navigate('Account Detail')
    } catch (error) {}
  }

  const on2FAPress = useCallback(() => {}, [])

  useFocusEffect(
    useCallback(() => {
      const findCountryCode = countryList.find(elem => elem.dial_code === '+92')
      setInputData({
        firstName: profile?.first_name,
        lastName: profile?.last_name,
        nickName: profile?.nickname,
        phoneNumber: profile?.mobile,
        isAnnoymous: profile.anonymous === 1 ? true : false,
        dob: profile?.date_of_birth,
        twoFA: profile['2fa_active'],
        countryCode: findCountryCode?.code,
        // phoneNumber:"921234567890"
      })
      setLoading(false)
    }, [profile]),
  )

  if (loading) {
    return <Loader />
  }

  return (
    <InfoWrapper>
      {inputArr.map(elem => {
        return <InputBox key={elem.name} {...elem} />
      })}
      <PhoneInput
        ref={phoneInput}
        value={inputData?.phoneNumber}
        defaultCode={inputData?.countryCode}
        layout="first"
        onChangeText={text => {
          setInputData({
            ...inputData,
            phoneNumber: text,
          })
        }}
        onChangeCountry={country => {
          setInputData({
            ...inputData,
            dialCode: country?.callingCode[0],
            countryCode: country?.cca2,
          })
        }}
        onChangeFormattedText={text => {
          console.log({ text1: text })
        }}
        withDarkTheme
        withShadow
      />
      <TextStyle>{t('TwoFactorAuthentication')}</TextStyle>

      <TwoFABtn
        color="rgb(73, 31, 105)"
        title={t(
          profile && profile['2fa_active'] ? 'Deactivate2FA' : 'Activate2FA',
        )}
        onPress={on2FAPress}
      />
      <TextStyle>{t('helpText')}</TextStyle>
      <Annoymous>
        <CheckBox
          value={inputData?.isAnnoymous}
          onValueChange={() => {
            setInputData({
              ...inputData,
              isAnnoymous: !inputData?.isAnnoymous,
            })
          }}
        />
        <TextStyle>{t('anonymous')}</TextStyle>
      </Annoymous>
      <TextStyle>{t('helpText2')}</TextStyle>
      <Button
        color="rgb(73, 31, 105)"
        title={t('save')}
        onPress={submit}
        disabled={isBtnDisabled}
      />
    </InfoWrapper>
  )
}
const InfoWrapper = styled(View)`
  margin: 12px;
`
const Annoymous = styled(View)`
  margin: 5px;
  flex-direction: row;
`
const TwoFABtn = styled(Button)`
  margin: 5px;
`

const TextStyle = styled(Text)`
  margin: 5px;
  font-weight: bold;
`

export default PersonalInfo
