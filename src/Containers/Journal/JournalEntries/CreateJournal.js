import React, { useState, useCallback, memo } from 'react'
import { Alert, Button, View, TouchableOpacity, Text } from 'react-native'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import InputBox from '@/Components/atoms/InputBox/InputBox'
import { useTranslation } from 'react-i18next'
import CallApi from '@/Util/callApi'
import { useContext } from 'react'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import styled from 'styled-components'
import Heading from '@/Components/atoms/Heading'
import { setEachJournalList } from '@/Store/ChatRooms'
import { useDispatch } from 'react-redux'

const CreateJournal = memo(({ editData, setCreateEntry }) => {
  const { authAxios } = useContext(AxiosContext)

  const { t } = useTranslation()

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  const [inputData, setInputData] = useState({
    title: '',
    content: '',
    journal_id: '',
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

  useFocusEffect(
    useCallback(() => {
      setInputData({
        title: editData?.title,
        content: editData?.content,
        journal_id: editData?.journal_id,
      })
    }, [editData?.journal_id]),
  )

  const inputArr = [
    {
      name: 'title',
      label: t('journalTitle'),
      value: inputData?.title,
      handler,
      error: err && !inputData?.title,
    },
    {
      name: 'content',
      label: t('journalContent'),
      value: inputData?.content,
      handler,
      error: err && !inputData?.content,
      multiline: true,
      numberOfLines: 12,
      height: 300,
    },
  ]

  const submit = useCallback(() => {
    const { title, content } = inputData
    if (title && content) {
      setErr(false)
      setIsBtnDisabled(true)
      submitForm(inputData)
    } else {
      setErr(true)
    }
  }, [inputData])

  const submitForm = async data => {
    try {
      const createEntry = await CallApi(
        authAxios,
        'post',
        api?.chatroom[editData?.journal_id ? 'updateJournal' : 'createJournal'],
        null,
        null,
        data,
      )
      setInputData({
        title: '',
        content: '',
        journal_id: '',
      })
      setIsBtnDisabled(false)
      dispatch(setEachJournalList({}))
      setCreateEntry(false)
      Alert.alert(createEntry?.message)
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
    <Wrapper>
      <Heading
        align={'left'}
        fontSize={'22'}
        style={{
          marginBottom: 15,
          marginLeft: 5,
        }}
      >
        {t(editData?.journal_id ? 'editJournalTooltip' : 'newJournalEntry')}
      </Heading>
      {inputArr.map(elem => {
        return <InputBox error={err} key={elem.name} {...elem} />
      })}

      <TouchableOpacity
        onPress={submit}
        disabled={isBtnDisabled}
        style={{
          backgroundColor: 'rgb(26, 85, 73)',
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
          {t(editData?.journal_id ? 'update' : 'save')}
        </Text>
      </TouchableOpacity>
    </Wrapper>
  )
})

const Wrapper = styled(View)`
  margin: 12px;
`
export default CreateJournal
