import { View, Text, Pressable } from 'react-native'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import styled from 'styled-components'
import Heading from '@/Components/atoms/Heading'
import { AxiosContext } from '@/Context/AxiosContext'
import { useDispatch, useSelector } from 'react-redux'
import api from '@/Util/api'
import { setTherapistProfile } from '@/Store/User'
import { useTranslation } from 'react-i18next'
import Avatar from '@/Components/atoms/Avatar'
import UrgentAlert from './UrgentAlert'
import Video from '@/Assets/Icons/Video'
import VideoCall from './VideoCall'
import { videoRoomRequest } from '@/Util/daily-co'
import { DailyTrackState } from '@daily-co/react-native-daily-js'
import { navigate } from '@/Navigators/utils'
import { useFocusEffect } from '@react-navigation/native'
import UrgentAlertModal from '@/Components/atoms/UrgentAlertModal/UrgentAlertModal'
import OnlineIcon from '@/Components/atoms/OnlineIcon/OnlineIcon'

const Therapistprofile = ({ navigation, showBio, setShowVideo, showVideo, }) => {
  const { authAxios } = useContext(AxiosContext)
  const { t } = useTranslation()
  const [startVideoCall, setStartVideoCall] = useState(false);
  const [showVideoCallBtn, setShowVideoCallBtn] = useState(false);
  const [openUrgentAlert, setOpenUrgentAlert] = useState(false);

  const chatRoomId = useSelector(store => store?.user?.rooms?.[0]?.chatroom_id)

  const dispatch = useDispatch()
  const { rooms, therapistProfile, chatRoomID } = useSelector(({ user }) => {
    return {
      rooms: user?.rooms,
      therapistProfile: user?.therapistProfile,
      chatRoomID: user?.rooms?.[0]?.chatroom_id,
    }
  })

  const therapistId = useMemo(() => {
    if (rooms?.length) return rooms[0].therapist_id
    return undefined
  }, [rooms])

  useEffect(() => {
    if (rooms === null) {
      //   dispatch(getActiveChatRooms()).then(res => {
      //     if (res.length === 0) history.push('/questionnaire')
      //   })
    }
  }, [rooms])

  useEffect(() => {
    if (!therapistId) return
    const getProfile = async () => {
      try {
        const { data } = await authAxios.get(
          `${api.therapist.publicProfile}/?therapist_id=${therapistId}`,
        )
        dispatch(setTherapistProfile(data.data))
      } catch (error) { }
    }
    getProfile()
  }, [therapistId])

  const checkVideoRoomStatus = id => {
    videoRoomRequest(`/rooms/SR-${id}`, 'GET')
      .then(function (response) {
        setShowVideoCallBtn(true)
        // dispatch(setVideoRoom(response.data));
      })
      .catch(function (error) { })
  }

  useEffect(() => {
    if (!chatRoomID) return
    // TO DO - add condition to not call this api if no call is scheduled

    checkVideoRoomStatus(chatRoomID)

    let checkRoomActive = setInterval(() => {
      checkVideoRoomStatus(chatRoomID)
    }, 60 * 1000)
    return () => {
      clearInterval(checkRoomActive)
    }
  }, [chatRoomID])

  useFocusEffect(
    useCallback(() => {
      if (showVideo) {
        navigate('Video')
      }
    }, [showVideo]),
  )

  if (!therapistProfile?.full_name) return null

  return (
    <>
      <TherapistWrapper>
        <ProfileWrapper>
          <View>
            <Avatar src={therapistProfile?.profile_image} width={50} />
            {therapistProfile?.is_online && <OnlineIcon />}
          </View>
          <ProfileDetails>
            <StyledHeading level={3} text={therapistProfile?.full_name} />
            {showBio && (
              <StyledDescription>
                {therapistProfile?.about_me}
              </StyledDescription>
            )}
            <ViewProfile onStartShouldSetResponder={() => {
              navigation.navigate("Therapist Profile")
            }}>
              <StyledLink>{t('viewProfile')}</StyledLink>
            </ViewProfile>
          </ProfileDetails>
        </ProfileWrapper>
        <ActionContainer>
          {showVideoCallBtn && (
            <VideoBtn
              onPress={() => {
                // setStartVideoCall(true)
                setShowVideo(true)
                // navigate('Video')
              }}
            >
              <Video />
            </VideoBtn>
          )}

          <UrgentAlert onPress={setOpenUrgentAlert} />
          <UrgentAlertModal open={openUrgentAlert} closeModal={setOpenUrgentAlert} />
        </ActionContainer>
      </TherapistWrapper>
      {/* {startVideoCall && <VideoCall chatRoomId={chatRoomId} />} */}
    </>
  )
}

export default Therapistprofile

const VideoBtn = styled(Pressable)`
  margin-right: 10px;
`

const ActionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

// const OnlineIcon = styled(View)`
//   content: '';
//   height: 10px;
//   width: 10px;
//   border: 1px solid #fff;
//   background-color: green;
//   border-radius: 5px;
//   position: absolute;
//   right: 2px;
//   top: 66%;
//   margin-top: 9px;
// `

const ProfileWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
`

const ProfileDetails = styled(View)`
  margin-left: ${({ theme }) => theme.spacing};
`

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  font-weight: bold;
`

const StyledLink = styled(Text)`
  color: ${({ theme }) => theme.primary};
  font-weight: normal;
  text-decoration: underline;
`

const StyledDescription = styled(Text)`
  max-width: 300px;
  margin: ${({ theme }) => theme.spacing} 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
const TherapistWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ViewProfile = styled(View)`

`
