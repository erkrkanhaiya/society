import { View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useContext } from 'react'
import { Styles } from '@/Styles/Styled-Components'
import styled from 'styled-components'
import WelcomeLayout from '@/Layout/WelcomeLayout'
import { Button, TouchText } from '@/Components'
import { useFocusEffect } from '@react-navigation/native'
import { AxiosContext } from '@/Context/AxiosContext'
import { Loader } from '@/Components/atoms'
import CallApi from '@/Util/callApi'
import api from '@/Util/api'
import { Selectedarr } from '@/Util/helper'

export default function Questionnaire(props) {
  const { authAxios, publicAxios } = useContext(AxiosContext)
  const [loading, setLoading] = useState(true)
  const [apiResData, setapiResData] = useState('')

  const fetchTherapyJourney = async () => {
    setLoading(true)
    try {
      const res = await publicAxios.post(api?.patient?.startquiz, null)
      if (res?.status == 200) {
        setapiResData(res?.data)
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const submitansMethod = async item => {
    setLoading(true)
    try {
      const apiReqData = {
        quiz_journey: apiResData.quiz_journey,
        question_id: apiResData?.data?.id,
        answer_id: Selectedarr(item),
      }
      const res = await publicAxios.post(api?.patient?.startquiz, apiReqData)
      if (res?.status == 200) {
        setapiResData(res?.data)
      }
    } catch (err) {
      console.log(err.response)
    }
    setLoading(false)
  }

  // const canSubmitFeedback = async () => {
  //   try {
  //     const feedback = await CallApi(
  //       authAxios,
  //       'get',
  //       api?.chatroom?.canSubmitFeedback + chatRoomID,
  //     )
  //     if (feedback) {
  //       // dispatch(setSubmitFeedback(feedback));
  //     }
  //   } catch (err) {}
  // }

  // const fetchMoodBox = async () => {
  //   await CallApi(authAxios, 'get', api?.patient?.moodBox, dispatch, setMoodBox)
  // }

  useFocusEffect(
    useCallback(() => {
      fetchTherapyJourney()
      // canSubmitFeedback()
    }, []),
  )

  useFocusEffect(
    useCallback(() => {
      // setLoading(true)
      // fetchMoodBox();
    }, []),
  )

  if (loading) {
    return <Loader />
  }

  return (
    <View style={{ flex: 1 }}>
      <WelcomeLayout isLogin isQuestionnaire {...props}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <Styles.Question>{apiResData?.data?.question}</Styles.Question>

          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              // flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
            }}
            data={apiResData?.data?.answers}
            keyExtractor={item => item.id}
            // horizontal
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      submitansMethod(item)
                    }}
                  >
                    <Styles.Answer>
                      <Styles.AnswerText>{item?.answer}</Styles.AnswerText>
                    </Styles.Answer>
                  </TouchableOpacity>
                </>
              )
            }}
          />
        </View>
      </WelcomeLayout>
    </View>
  )
}

// import React, { useState, useCallback, useContext } from 'react';
// import AuthLayout from '@/Layout/AuthLayout';
// import { Loader } from '@/Components/atoms';
// import { useFocusEffect } from '@react-navigation/native';
// import CallApi from '@/Util/callApi';
// import { AxiosContext } from '@/Context/AxiosContext';
// import api from '@/Util/api';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSubmitFeedback, setTherapyJourney } from '@/Store/ChatRooms';
// import { setMoodBox } from '@/Store/User';
// import TherapyFeedback from '../MoodBox/TherapyFeedback/TherapyFeedback';
// import MoodBoxForm from '../MoodBox/MoodBoxForm/MoodBoxForm';
// import EnterpriseMoodBox from '../MoodBox/EnterpriseMoodBox/EnterpriseMoodBox';

// const Questionnaire = props => {

//   const { chatRoomID, therapyJourney, profile } = useSelector(({ user, chatrooms }) => {
//     return ({
//       chatRoomID: user?.chatRoomID,
//       therapyJourney: chatrooms?.therapyJourney,
//       profile: user?.profile,
//     });
//   });

//   const dispatch = useDispatch();

//   const { authAxios } = useContext(AxiosContext);
//   const [loading, setLoading] = useState(true);

//   const fetchTherapyJourney = async () => {
//     try {
//       const therapy = await CallApi(authAxios, "get", api?.chatroom?.getTherapy + chatRoomID);
//       if (therapy?.data) {
//         dispatch(setTherapyJourney(therapy?.data));
//       }
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//     }
//   }

//   const canSubmitFeedback = async () => {
//     try {
//       const feedback = await CallApi(authAxios, "get", api?.chatroom?.canSubmitFeedback + chatRoomID);
//       if (feedback) {
//         dispatch(setSubmitFeedback(feedback));
//       }
//     } catch (err) { }
//   }

//   const fetchMoodBox = async () => {
//     await CallApi(authAxios, "get", api?.patient?.moodBox, dispatch, setMoodBox);
//   }

//   useFocusEffect(
//     useCallback(() => {
//       if (profile?.moodbox_page_visited) {
//         props.navigation.navigate("Chatroom");
//       }
//       // if (status !== "success") {
//       //   return
//       // }
//       // if (profile?.id && (chatroomRooms === null || chatroomRooms?.length === 0)) {
//       //   history.push('/welcome/therapists');
//       // }
//     }, [
//       profile,
//       // chatroomRooms,
//       // history
//     ])
//   );

//   useFocusEffect(
//     useCallback(() => {
//       fetchTherapyJourney();
//       canSubmitFeedback();
//     }, [chatRoomID])
//   );

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchMoodBox();
//     }, [])
//   );

//   if (loading) {
//     return <Loader />
//   }

//   if (profile && profile['B2B']) {
//     return (
//       <AuthLayout {...props}>
//         {!loading && <EnterpriseMoodBox profile={profile} {...props} />}
//       </AuthLayout>
//     )
//   }

//   return (
//     <AuthLayout {...props}>
//       {!loading && !therapyJourney?.submitFeedback && !therapyJourney?.submitFinalFeedback && <MoodBoxForm {...props} />}
//       {(therapyJourney?.submitFeedback || therapyJourney?.submitFinalFeedback) && <TherapyFeedback
//         isFinal={therapyJourney?.submitFinalFeedback} />
//       }
//     </AuthLayout>
//   )
// };
// export default Questionnaire;
