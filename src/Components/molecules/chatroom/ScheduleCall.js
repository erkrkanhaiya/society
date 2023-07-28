import { View, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Availability from './Availability'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { setScheduleList, setSubscriptionStatus } from '@/Store/User'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { simplifySchedule } from '@/Util/helper'

const ScheduleCall = () => {
  const { authAxios } = useContext(AxiosContext)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { rooms, isB2b, subscription, myBookedEvents, schedules, chatRoomID } =
    useSelector(({ user }) => {
      return {
        rooms: user?.rooms,
        isB2b: !!user?.profile?.B2B,
        subscription: user?.subscription,
        myBookedEvents: user?.myBookedEvents,
        schedules: simplifySchedule(user?.scheduleList),
        chatRoomID: user?.rooms?.[0]?.chatroom_id,
      }
    })

  const isChatRoomActive = useMemo(() => {
    return !!(rooms?.[0]?.chatroom_status === 'approved')
  }, [rooms])

  const futureBookedEventsCount = useMemo(() => {
    if (myBookedEvents) {
      const currentDate = moment()
      return myBookedEvents.filter(
        slot =>
          slot.appointment_type === 'video' &&
          currentDate.isBefore(
            moment(
              `${slot.schedule_date} ${slot.schedule_time}`,
              'YYYY-MM-DD HH:mm:ss',
            ),
          ),
      ).length
    }

    return null
  }, [myBookedEvents])

  const getScheduleList = async () => {
    try {
      const start = moment().utc()
      const end = moment().utc()
      end.add(2, 'weeks')

      const { data } = await authAxios.get(
        `${
          api.chatroom.schedule
        }?chatroom_id=${chatRoomID}&start_date=${start.format(
          'YYYY-MM-DD',
        )}&end_date=${end.format('YYYY-MM-DD')}`,
      )
      dispatch(setScheduleList(data.data))
    } catch (error) {}
  }

  const getSubscriptionStatus = async () => {
    try {
      const { data } = await authAxios.get(api.patient.subscriptionStatus)
      dispatch(setSubscriptionStatus(data))
    } catch (error) {}
  }

  useEffect(() => {
    if (!chatRoomID) return

    getScheduleList()
  }, [chatRoomID])

  useEffect(() => {
    getSubscriptionStatus()
  }, [])

  const isAllowedForBooking = useMemo(() => {
    const remainingVideoCalls = subscription?.remaining_video_calls
    return remainingVideoCalls || futureBookedEventsCount
  }, [subscription, futureBookedEventsCount])

  return (
    <View style={{ flexDirection: 'row' }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {isChatRoomActive && (
          <>
            {/* <ProfileWrapper>
              <div>
                {videoRoomName ? (
                  <StyledButton onClick={startVideoRoom}>
                    <img src={Video} alt="" />
                  </StyledButton>
                ) :    <MissedSessionButton />
                }
              </div>
            </ProfileWrapper> */}
            <View style={{ marginTop: 16 }}>
              {isB2b && !isAllowedForBooking ? null : (
                <Availability
                  isAllowedForBooking={isAllowedForBooking}
                  heading={t('therapistVideoCallAvailability')}
                  slots={schedules}
                  getSubscriptionStatus={getSubscriptionStatus}
                  getScheduleList={getScheduleList}
                  canBookAfterCancel={
                    futureBookedEventsCount &&
                    !subscription?.remaining_video_calls
                  }
                />
              )}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default ScheduleCall
