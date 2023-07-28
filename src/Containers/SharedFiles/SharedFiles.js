import React, { useState, useCallback, useContext, Fragment } from 'react'
import { View, Alert, Image, ScrollView, Text } from 'react-native'

import AuthLayout from '@/Layout/AuthLayout'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import CallApi from '@/Util/callApi'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useSelector } from 'react-redux'
import Heading from '@/Components/atoms/Heading'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import RNFetchBlob from 'rn-fetch-blob'
import styled from 'styled-components'

const ColData = ({ colVal, pressEvent = false }) => {
  return (
    <ColWrapper
      onStartShouldSetResponder={() => {
        if (pressEvent) {
          pressEvent()
        }
      }}
    >
      <Text
        style={{
          color: 'rgb(73, 31, 105)',
        }}
      >
        {colVal}
      </Text>
    </ColWrapper>
  )
}
const RowData = ({ colVal, pressEvent = false }) => {
  return (
    <RowWrapper
      onStartShouldSetResponder={() => {
        if (pressEvent) {
          pressEvent()
        }
      }}
    >
      <Text
        style={{
          color: 'rgb(73, 31, 105)',
          fontSize: 16,
          fontWeight: '700',
        }}
      >
        {colVal}
      </Text>
    </RowWrapper>
  )
}
const HeaderRow = ({ data }) => {
  return data?.length ? (
    <Fragment>
      {data.map(elem => (
        <RowData colVal={elem} />
      ))}
    </Fragment>
  ) : null
}

const SharedFiles = props => {
  const { t } = useTranslation()

  const { chatRoomID } = useSelector(({ user }) => {
    return {
      chatRoomID: user?.chatRoomID,
    }
  })

  const { authAxios } = useContext(AxiosContext)
  const [loading, setLoading] = useState(true)
  const [sharedFilesData, setSharedFilesData] = useState({})

  const downloadFile = fileUrl => {
    let FILE_URL = fileUrl
    const { config, fs } = RNFetchBlob
    let RootDir = fs.dirs.MovieDir
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(new Date().getTime() + new Date().getSeconds() / 2),
        description: 'downloading file...',
        notification: true,
        useDownloadManager: true,
      },
    }
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        Alert.alert('File Downloaded Successfully.')
      })
  }

  const getFileLink = item => {
    console.log('<<<<<<', item)
    return (
      <Fragment>
        {['jpeg', 'jpg', 'png', 'gif'].includes(item.file.type) ? (
          <Image
            resizeMode="contain"
            style={{
              height: 150,
              width: 80,
            }}
            source={{
              uri: item.file.url,
            }}
          />
        ) : (
          <Fragment>
            <Image
              source={{
                uri: item.file.url,
              }}
            />
            <Text style={{ color: 'blue' }}>{item?.file?.name}</Text>
          </Fragment>
        )}
      </Fragment>
    )
  }

  const fetchSharedFiles = async () => {
    try {
      const sharedFiles = await CallApi(
        authAxios,
        'get',
        api?.chatroom?.sharedFiles + chatRoomID,
      )
      setSharedFilesData(sharedFiles)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (chatRoomID) {
        fetchSharedFiles()
      }
    }, [chatRoomID]),
  )

  if (loading) {
    return <Loader />
  }

  const heading = [t('file'), t('sentBy'), t('date')]
  return (
    <AuthLayout {...props}>
      <SharedFileContainer>
        <Heading align={'left'} fontSize={'20px'} fontWeight={'800'}>
          {' '}
          {t('sharedFiles')}
        </Heading>
      </SharedFileContainer>

      <RenderRowWrapper>
        <HeaderRow data={heading} />
      </RenderRowWrapper>

      <ScrollView>
        {sharedFilesData?.data?.resources?.length &&
          sharedFilesData?.data?.resources.map((item, index) => {
            return (
              <RenderRowWrapper key={item.id + index + item?.file?.url}>
                <ColData
                  colVal={getFileLink(item)}
                  pressEvent={() => downloadFile(item[item.type].url)}
                />
                <ColData colVal={item.sent_by} />
                <ColData
                  colVal={moment(item.sent_at).format('YYYY-MM-DD HH:mm:ss')}
                />
              </RenderRowWrapper>
            )
          })}
      </ScrollView>
    </AuthLayout>
  )
}

const RenderRowWrapper = styled(View)`
  flex-direction: row;
  margin: 10px;
  justify-content: center;
`
const ColWrapper = styled(View)`
  width: 32%;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  border-color: #e2e8f0;
  border-bottom-width: 1px;
  border-top-width: 1px;
`
const RowWrapper = styled(View)`
  width: 32%;
  padding: 2px;
`
const SharedFileContainer = styled(View)`
  margin: 10px;
`
export default SharedFiles
