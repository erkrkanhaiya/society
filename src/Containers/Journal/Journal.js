import React, { useState, useCallback, useContext } from 'react'
import {
  View,
  Button,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import AuthLayout from '@/Layout/AuthLayout'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import { AxiosContext } from '@/Context/AxiosContext'
import CallApi from '@/Util/callApi'
import api from '@/Util/api'
import Heading from '@/Components/atoms/Heading'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import JournalEntries from './JournalEntries/JournalEntries'
import { useDispatch, useSelector } from 'react-redux'
import { setEachJournalList } from '@/Store/ChatRooms'
import IndividualJournalList from './JournalEntries/IndividualJournalList'
import CreateJournal from './JournalEntries/CreateJournal'
import Title from '@/Components/atoms/Title/Title'
import JournalSvg from '@/Assets/Icons/Journal'

const Journal = props => {
  const dispatch = useDispatch()
  const { list } = useSelector(({ chatrooms }) => {
    return {
      list: chatrooms?.eachJournalList,
    }
  })
  const { authAxios } = useContext(AxiosContext)
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [journalData, setJournalsData] = useState({})
  const [createEntry, setCreateEntry] = useState(false)

  const fetchJournals = async () => {
    try {
      const journals = await CallApi(
        authAxios,
        'get',
        api?.chatroom?.journals(1),
      )
      setJournalsData(journals)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchJournals()
    }, [journalData]),
  )

  if (loading) {
    return <Loader />
  }

  return (
    <AuthLayout {...props}>
      <Title SVG={JournalSvg}>
        <Heading align={'left'} fontSize={'20px'} fontWeight={'800'}>
          {t('journal')}
        </Heading>
      </Title>
      <ButtonGroup>
        <TouchableOpacity
          onPress={() => {
            dispatch(setEachJournalList({}))
            setCreateEntry(false)
          }}
          style={{
            backgroundColor: 'rgb(26, 85, 73)',
            width: 165,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            marginTop: 10,
            marginLeft: 8,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
            }}
          >
            {t('allJournalEntries')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(setEachJournalList({}))
            setCreateEntry(true)
          }}
          style={{
            backgroundColor: 'rgb(26, 85, 73)',
            width: 145,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            marginTop: 10,
            marginRight: 8,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
            }}
          >
            {t('Create an Entry')}
          </Text>
        </TouchableOpacity>
      </ButtonGroup>
      {createEntry ? (
        <CreateJournal editData={list} setCreateEntry={setCreateEntry} />
      ) : null}
      {!list?.journal_id && !createEntry ? (
        <JournalEntries
          data={journalData?.data}
          setCreateEntry={setCreateEntry}
        />
      ) : list?.journal_id && !createEntry ? (
        <IndividualJournalList />
      ) : null}
    </AuthLayout>
  )
}

const ButtonGroup = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
`
export default Journal
