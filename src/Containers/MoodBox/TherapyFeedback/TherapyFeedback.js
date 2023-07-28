import React, { memo, useCallback, useContext, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import CallApi from '@/Util/callApi'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useTranslation } from 'react-i18next'
import Heading from '@/Components/atoms/Heading'

const satisfactionCheckboxData = [
  { label: 'Extremely Unsatisfied', value: 1 },
  { label: 'Very Unsatisfied', value: 2 },
  { label: 'Satisfied', value: 3 },
  { label: 'Very Satisfied', value: 4 },
  { label: 'Extremely Satisfied', value: 5 },
]

const TherapyFeedback = ({ isFinal }) => {
  const { authAxios } = useContext(AxiosContext)

  const { t } = useTranslation()

  const { chatRoomID } = useSelector(({ user }) => {
    return {
      chatRoomID: user?.chatRoomID,
    }
  })

  const [satisfaction, setSatisfaction] = useState([])
  const [isSubmitDisabled, setSubmitDisabled] = useState(false)

  const dispatch = useDispatch()

  const satisfactionOnChange = useCallback(
    val => {
      let tempArr = []
      tempArr.push(val)
      setSatisfaction(tempArr)
    },
    [satisfaction],
  )

  const submitFeedback = async () => {
    try {
      const reqData = {
        rating: satisfaction[0],
        chatroom_id: chatRoomID,
        comment: 'comment',
      }
      const feedback = await CallApi(
        authAxios,
        'post',
        api?.chatroom?.submitFeedback,
        null,
        null,
        reqData,
      )

      if (feedback) {
        setSubmitDisabled(false)
        setSatisfaction([])
      }
    } catch (err) {}
  }

  const submit = useCallback(() => {
    setSubmitDisabled(true)
    submitFeedback()
  }, [dispatch, satisfaction, chatRoomID])

  return (
    <SubmitFeedbackWrapper>
      {isFinal ? (
        <Heading>{t('therapyFeedback1')}</Heading>
      ) : (
        <Heading>{t('therapyFeedback2')}</Heading>
      )}
      {satisfactionCheckboxData.map(checkbox => (
        <CheckboxWrapper key={checkbox.value}>
          <CheckBox
            disabled={false}
            value={satisfaction.includes(checkbox.value)}
            onValueChange={() => satisfactionOnChange(checkbox.value)}
            tintColors={{ true: 'rgb(73, 31, 105)' }}
          />
          <Text
            style={{
              color: `rgb(73, 31, 105)`,
              fontWeight: '400',
              margin: 5,
            }}
          >
            {checkbox.label}
          </Text>
        </CheckboxWrapper>
      ))}
      <Button
        disabled={!satisfaction.length || isSubmitDisabled}
        title="submit"
        color={'rgb(26, 85, 73)'}
        onPress={() => submit()}
      />
    </SubmitFeedbackWrapper>
  )
}

const SubmitFeedbackWrapper = styled(View)`
  justify-content: center;
  margin: 20px;
`

const CheckboxWrapper = styled(View)`
  flex-direction: row;
  margin: 10px;
`

const ButtonWrapper = styled(View)`
  margin-top: ${({ theme }) => theme.spacingMd};
`

export default memo(TherapyFeedback)
