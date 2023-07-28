import React, { useState, useCallback, useContext } from 'react'
import { Dimensions, ScrollView, Text, View, Modal } from 'react-native'
import { Loader } from '@/Components/atoms'
import { useFocusEffect } from '@react-navigation/native'
import ModalComponent from '../../Components/atoms/Modal/Modal'
import CallApi from '@/Util/callApi'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import FaqList from './FaqList'
import styled from 'styled-components'

const Faq = props => {
  const { authAxios } = useContext(AxiosContext)
  const { t } = useTranslation()
  const role = useSelector(({ auth }) => auth?.role)

  const [loading, setLoading] = useState(true)
  const [faqData, setFaqData] = useState({})

  const [categories, setCategories] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // const fetchFaq = async () => {
  //   try {
  //     const faq = await CallApi(authAxios, "get", api?.patient?.faq);
  //     setFaqData(faq);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false)
  //   }
  // }

  const loadFaq = useCallback(async () => {
    try {
      const categories = await CallApi(authAxios, 'get', api?.patient?.faq)
      const filteredCategories = categories?.data.filter(({ name }) =>
        name
          .toLowerCase()
          .includes(role === 'therapist' ? 'therapist' : 'patients'),
      )
      setCategories(filteredCategories)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }, [role])

  useFocusEffect(
    useCallback(() => {
      setLoading(true)
      loadFaq()
    }, []),
  )

  if (loading) {
    return <Loader />
  }

  return (
    <ModalComponent
      height="80%"
      closeModal={props.closeModal}
      open={props.openModal}
      // children,
      // closeModal,
      // showCloseButton = true,
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        {categories.length ? (
          categories.map(({ name, id }) => (
            <FaqList key={id} heading={name} categoryID={id} />
          ))
        ) : (
          <Text>{t('noFaqs')}</Text>
        )}
      </ScrollView>
    </ModalComponent>
  )
}

const Scroller = styled(ScrollView)`
  margin-top: 5px;
`
export default Faq
