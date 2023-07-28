import React, { useState, useCallback, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AuthLayout from '@/Layout/AuthLayout'
import { Loader } from '@/Components/atoms'
import MoodBoxForm from './MoodBoxForm/MoodBoxForm'
import { useFocusEffect } from '@react-navigation/native'
import CallApi from '@/Util/callApi'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useDispatch, useSelector } from 'react-redux'
import { setSubmitFeedback, setTherapyJourney } from '@/Store/ChatRooms'
import TherapyFeedback from './TherapyFeedback/TherapyFeedback'
import EnterpriseMoodBox from './EnterpriseMoodBox/EnterpriseMoodBox'
import { setMoodBox } from '@/Store/User'
import { Image } from 'react-native'
import { color } from 'react-native-reanimated'

const MoodBox = props => {
  const { chatRoomID, therapyJourney, profile } = useSelector(
    ({ user, chatrooms }) => {
      return {
        chatRoomID: user?.chatRoomID,
        therapyJourney: chatrooms?.therapyJourney,
        profile: user?.profile,
      }
    },
  )

  const dispatch = useDispatch()

  const { authAxios } = useContext(AxiosContext)
  const [loading, setLoading] = useState(true)

  const fetchTherapyJourney = async () => {
    try {
      const therapy = await CallApi(
        authAxios,
        'get',
        api?.chatroom?.getTherapy + chatRoomID,
      )
      if (therapy?.data) {
        dispatch(setTherapyJourney(therapy?.data))
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  const canSubmitFeedback = async () => {
    try {
      const feedback = await CallApi(
        authAxios,
        'get',
        api?.chatroom?.canSubmitFeedback + chatRoomID,
      )
      if (feedback?.status === 'success') {
        dispatch(setSubmitFeedback(feedback))
      }
    } catch (err) {}
  }

  const fetchMoodBox = async () => {
    await CallApi(authAxios, 'get', api?.patient?.moodBox, dispatch, setMoodBox)
  }

  useFocusEffect(
    useCallback(() => {
      if (profile?.moodbox_page_visited) {
        props.navigation.navigate('Chatroom')
      }
      // if (status !== "success") {
      //   return
      // }
      // if (profile?.id && (chatroomRooms === null || chatroomRooms?.length === 0)) {
      //   history.push('/welcome/therapists');
      // }
    }, [
      profile,
      // chatroomRooms,
      // history
    ]),
  )

  useFocusEffect(
    useCallback(() => {
      fetchTherapyJourney()
      canSubmitFeedback()
    }, [chatRoomID]),
  )

  useFocusEffect(
    useCallback(() => {
      setLoading(true)
      fetchMoodBox()
    }, []),
  )

  if (loading) {
    return <Loader />
  }

  if (profile && profile['B2B']) {
    return (
      <AuthLayout {...props}>
        {!loading && <EnterpriseMoodBox profile={profile} {...props} />}
      </AuthLayout>
    )
  }

  return (
    <AuthLayout {...props}>
      {!loading &&
        !therapyJourney?.submitFeedback &&
        !therapyJourney?.submitFinalFeedback && <MoodBoxForm {...props} />}
      {(therapyJourney?.submitFeedback ||
        therapyJourney?.submitFinalFeedback) && (
        <TherapyFeedback isFinal={therapyJourney?.submitFinalFeedback} />
      )}
    </AuthLayout>
  )
}
export default MoodBox
