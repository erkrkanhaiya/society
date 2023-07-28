import React, { useCallback, useContext, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { View, Text, TouchableOpacity } from 'react-native'
import WelcomeStatus from './WelcomeStatus'
import CallApi from '@/Util/callApi'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import Modal from '@/Components/atoms/Modal/Modal'
import { useFocusEffect } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { setPatientProfile } from '@/Store/User'
// import leftArrow from '@/Assets/Icons/leftArrow'
// import rightArrow from '@/Assets/Icons/rightArrow'
import { Image } from 'react-native'
// import Images from "../../../Assets/Images"

const EnterpriseMoodBox = ({ profile, navigation }) => {
  const { moodBox } = useSelector(({ user }) => {
    return {
      moodBox: user?.moodBox,
    }
  })

  const { authAxios } = useContext(AxiosContext)

  const { t } = useTranslation()

  const [welcomeStatus, setWelcomeStatus] = useState(true)
  const [scores, setScores] = useState()
  const [selectedAnswer, setSelectedAnswer] = useState()
  const [currentStep, setCurrentStep] = useState(1)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)

  const dispatch = useDispatch()

  const letsGo = useCallback(() => {
    setWelcomeStatus(false)
  }, [welcomeStatus])

  const insertAnswerInScores = index => {
    if (index !== undefined) {
      const newScores = [...scores]
      newScores[currentStep - 1].score = index
      setScores(newScores)
    }
  }

  const selectAnswer = index => {
    setSelectedAnswer(index)
    insertAnswerInScores(index)
    if (scores?.length > currentStep) {
      setSelectedAnswer(undefined)
      setTimeout(() => setCurrentStep(step => ++step), 300)
    } else if (scores?.length === currentStep) {
      saveMoodQuestions({ data: scores })
    }
  }

  const debounce = (func, timeout = 300) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  const processChange = debounce(i => selectAnswer(i))

  const saveMoodQuestions = async reqData => {
    const res = await CallApi(
      authAxios,
      'post',
      api?.patient?.saveMoodBox,
      null,
      null,
      reqData,
    )
    if (res?.status === 'success') {
      await getProfile()
    }
  }

  const getProfile = async () => {
    try {
      const { data } = await authAxios.get(api.patient.profile)

      dispatch(setPatientProfile(data.data))

      // const profile = await CallApi(authAxios, 'get', api?.patient?.profile)
      if (data?.data?.moodbox_page_visited) {
        navigation.navigate('Chatroom')
      }
    } catch (err) {}
  }

  useFocusEffect(
    useCallback(() => {
      if (
        profile &&
        profile['B2B'] &&
        profile.register_date &&
        profile.moodbox_style === 'b2b'
      ) {
        if (moment(profile.register_date).isSame(new Date(), 'day')) {
          setShowWelcomeModal(true)
        }
      }
    }, [profile]),
  )

  useFocusEffect(
    useCallback(() => {
      if (moodBox?.data?.length) {
        const scores = moodBox?.data.map(mood => ({
          question_id: mood.id,
          score: mood.score ? mood.score : undefined,
        }))
        setScores(scores)
      }
    }, [moodBox]),
  )

  const currentQuestion = useMemo(
    () => (moodBox?.data?.length ? moodBox?.data[currentStep - 1] : null),
    [moodBox, currentStep],
  )

  return welcomeStatus ? (
    <WelcomeStatus letsGo={letsGo} />
  ) : (
    <>
      <Wrapper>
        <ModalComponent
          open={showWelcomeModal}
          closeModal={setShowWelcomeModal}
        >
          <Text>{t('modalCompPara1')}</Text>
          <Text>{t('modalCompPara2')}</Text>
          <Text>{t('modalCompPara3')}</Text>
        </ModalComponent>

        <Question>{currentQuestion?.question}</Question>

        <View
          style={{
            marginTop: 25,
          }}
        >
          {currentQuestion?.answers?.map(({ title }, index) => (
            <Answer
              key={title}
              onPress={() => processChange(5 - index)}
              selected={
                selectedAnswer === 5 - index ||
                (scores && scores[currentStep - 1]?.score === 5 - index)
              }
            >
              <QuestionCount>{index + 1}</QuestionCount>
              <View
                style={{
                  height: '100%',
                  width: 2,
                  backgroundColor: 'white',
                }}
              ></View>
              <QuestionText>{title}</QuestionText>
            </Answer>
          ))}
        </View>
      </Wrapper>

      <NavigationWrapper>
        <Image
          source={require('../../../Assets/Images/leftArrow.png')}
          style={{
            width: 20,
            height: 20,
            tintColor: '#64748b',
          }}
          resizeMode="contain"
        />
        <QuestionStep>
          {currentStep} OF {moodBox?.data?.length}
        </QuestionStep>
        <Image
          source={require('../../../Assets/Images/rightArrow.png')}
          style={{
            width: 20,
            height: 20,
            tintColor: '#64748b',
          }}
          resizeMode="contain"
        />
      </NavigationWrapper>
    </>
  )
}

const Wrapper = styled(View)`
  padding: 30px;
`

const Question = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  text-align: left;
  color: #00c8a0;
  margin-left: 15px;
`

const AnswersWrapper = styled(View)`
  max-width: 56px;
  margin: 30px auto;
  background-color: aquamarine;
`

const QuestionCount = styled(Text)`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid white;
  margin-left: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #00c8a0;
  user-select: none;
`

const QuestionText = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: black;
  user-select: none;
  margin-left: 15px;
`

const Answer = styled(TouchableOpacity)`
  width: 280px;
  height: 48px;
  background: #f0f1f6;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #eaebef;
  }
  ${({ selected }) =>
    selected &&
    css`
      background: #00c8a0;
      ${QuestionCount} {
        color: white;
      }
      ${QuestionText} {
        color: white;
        font-weight: bold;
      }
      &:hover {
        background: #01b894;
      }
    `};
`

const NavigationWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 42px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  /* bottom: -50; */
`

const Navigation = styled(View)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  &:hover {
    background: #f0f1f6;
    ${Icon} {
      width: 20px;
      height: 20px;
      path {
        fill: #00c8a0;
      }
    }
  }
  ${({ right }) =>
    right &&
    css`
      ${Icon} {
        transform: rotate(180deg);
      }
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      ${Icon} {
        path {
          fill: grey;
        }
      }
    `};
`

// const Icon = styled.svg``;
const Icon = styled(Text)``

const QuestionStep = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: black;
`

const ModalComponent = styled(Modal)``

export default EnterpriseMoodBox
