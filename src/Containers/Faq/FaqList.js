import React, { useState, useCallback, useContext, memo, Fragment } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import CallApi from '@/Util/callApi'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useTranslation } from 'react-i18next'
import Heading from '@/Components/atoms/Heading'
import styled from 'styled-components'

const FaqList = ({ heading, categoryID }) => {
  const { authAxios } = useContext(AxiosContext)
  const { t } = useTranslation()
  const [faqListing, setFaqListing] = useState([])

  const generateList = (lines, char = '●') => {
    return (
      <View>
        {lines
          .filter(line => line.trim())
          .map(line => {
            const [headline, ...rest] = line.split('○')
            return (
              <Text key={line}>
                {char} {headline}
                {rest.length >= 0 && generateList(rest, '○')}
              </Text>
            )
          })}
      </View>
    )
  }

  const parseAnswer = answer => {
    const listStartIndex = answer.indexOf('●')
    return (
      <Fragment>
        {listStartIndex >= 0 ? answer.slice(0, listStartIndex) : answer}
        {listStartIndex >= 0 &&
          generateList(answer.slice(listStartIndex).split('●'))}
      </Fragment>
    )
  }

  const loadFaqList = useCallback(async () => {
    try {
      const faqListing = await CallApi(
        authAxios,
        'get',
        api?.patient?.faqList + categoryID,
      )
      setFaqListing(faqListing?.data)
    } catch (err) {}
  }, [categoryID])

  useFocusEffect(
    useCallback(() => {
      loadFaqList()
    }, [categoryID]),
  )

  return (
    <ListWrapper>
      <Heading align={'left'} height={'30px'}>
        {heading}
      </Heading>
      {faqListing.length
        ? faqListing.map(({ id, question, answer }) => (
            <View key={id}>
              <Heading align={'left'}>{question}</Heading>
              <AnswerWrapper>{parseAnswer(answer)}</AnswerWrapper>
            </View>
          ))
        : null}
    </ListWrapper>
  )
}

const ListWrapper = styled(View)`
  /* margin:5px; */
`

const AnswerWrapper = styled(Text)`
  word-break: break-all;
  width: ${props => props.width};
  text-align: left;
  margin: 10px;
  color: rgb(73, 31, 105);
`
export default memo(FaqList)
