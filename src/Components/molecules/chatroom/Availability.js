import { View, Text, Pressable, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useMemo } from 'react'
import { useCallback } from 'react'
import styled from 'styled-components/native'
import { useState } from 'react'
import { Modal } from '@/Components/atoms'
import { useContext } from 'react'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const isTimeGreaterThanNow = localScheduleDateTime => {
  const diff = moment
    ?.duration(moment(localScheduleDateTime).diff(moment()))
    ?.asMinutes()
    ?.toFixed(0)
  return Number(diff) + 31 > 0
}

const Availability = ({
  heading,
  slots,
  getScheduleList,
  getSubscriptionStatus,
  isAllowedForBooking,
  canBookAfterCancel,
}) => {
  const { t } = useTranslation()

  const [timeSlotModal, setTimeSlotModal] = useState(false)
  const [infoModal, setInfoModal] = useState('')
  const [currModalData, setCurrModalData] = useState([])

  const chatRoomId = useSelector(store => store?.user?.rooms?.[0]?.chatroom_id)
  const patientId = useSelector(store => store?.user?.profile?.id)
  const { authAxios } = useContext(AxiosContext)

  const getDif = useCallback(data => {
    const momentCurrentTime = moment()
    const diff = moment.duration(
      moment
        .utc(`${data.date.schedule_date} ${data.slot.schedule_time}`)
        .local()
        .diff(moment(momentCurrentTime)),
    )

    return Math.round(diff.asHours())
  }, [])

  const availableSlots = useMemo(() => {
    const now = moment()
    return slots.reduce((dates, date) => {
      const isWithinTwoDays =
        moment.duration(moment(date.schedule_date).diff(now)).asDays() <= 2
      if (isWithinTwoDays) {
        const currAvailableSlots = date.slots.filter(slot => {
          return (
            getDif({ date, slot }) >=
              +process.env.REACT_APP_APPOINTMENT_WITHIN ||
            (slot.status === 'booked' &&
              slot?.patient_id === patientId &&
              isTimeGreaterThanNow(slot?.local_schedule_date_time))
          )
        })
        if (currAvailableSlots.length)
          dates.push({ ...date, slots: currAvailableSlots })
      } else dates.push(date)
      return dates
    }, [])
  }, [slots, getDif])

  useEffect(() => {
    if (timeSlotModal) return
    setCurrModalData([])
  }, [])

  const bookEvent = async slot => {
    if (slot.status === 'booked') {
      return removeEvent(slot)
    }
    try {
      const payload = {
        chatroom_id: chatRoomId,
        slot_id: slot.schedule_id,
        appointment_type: 'video',
      }

      await authAxios.post(api.patient.appointment, payload)

      setTimeSlotModal(false)
      setInfoModal(t('videoSessBooked'))
      getScheduleList()
      getSubscriptionStatus()
    } catch (error) {}
  }

  const removeEvent = async slot => {
    try {
      await authAxios.post(api.general.cancelAppointments, {
        appointment_id: slot.appointment_id,
      })
      setTimeSlotModal(false)
      setInfoModal('Your appointment has been cancelled!')

      getScheduleList()
      getSubscriptionStatus()
    } catch (error) {}
  }

  return (
    <>
      <AvailableSlotsWrapper>
        {availableSlots.map(date => {
          const filteredSlots = date.slots.filter(
            slot => !slot.patient_id || slot.patient_id === patientId,
          )

          const isDateHavingAppointments = filteredSlots.find(
            slot => slot.status === 'booked',
          )

          return (
            <React.Fragment key={date.schedule_date}>
              <DayView
                key={date.schedule_date}
                onPress={() => {
                  setTimeSlotModal(true)
                  setCurrModalData(filteredSlots)
                }}
                isAppointment={isDateHavingAppointments}
              >
                <DayViewText>
                  {moment(date.schedule_date).format('Do MMM')}
                </DayViewText>
              </DayView>
            </React.Fragment>
          )
        })}
      </AvailableSlotsWrapper>

      <Modal open={timeSlotModal} closeModal={setTimeSlotModal}>
        <TimeSlotText>Select a Time Slot</TimeSlotText>
        <TimeSlotContainer>
          {currModalData.map(slot => {
            return (
              <React.Fragment key={slot.schedule_id}>
                <DayView
                  isTime
                  isAppointment={slot.status === 'booked'}
                  onPress={() => bookEvent(slot)}
                >
                  {slot.status === 'booked' && (
                    <CloseIconWrapper>
                      <Pressable
                        onPress={() => {
                          removeEvent(slot)
                        }}
                      >
                        <CloseIcon>x</CloseIcon>
                      </Pressable>
                    </CloseIconWrapper>
                  )}
                  <DayViewText>
                    {moment
                      .utc(slot.schedule_time, 'HH:mm:ss')
                      .local()
                      .format('HH:mm')}
                  </DayViewText>
                </DayView>
              </React.Fragment>
            )
          })}
        </TimeSlotContainer>
      </Modal>
      <Modal open={!!infoModal} closeModal={setInfoModal}>
        <TimeSlotText noGutter>{infoModal}</TimeSlotText>
      </Modal>
    </>
  )
}

export default Availability

const CloseIconWrapper = styled(View)`
  position: absolute;
  right: -6px;
  top: -6px;
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
  z-index: 30;
  elevation: 30;
  border-width: 0.1px;
  shadowcolor: '#8c8c8c';
  shadowopacity: 0.2;
  shadowradius: 1px;
`

const CloseIcon = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin-top: -2px;
`

const AvailableSlotsWrapper = styled(View)`
  flex-direction: row;
`

const DayView = styled(Pressable)`
  margin-right: 10px;
  margin-bottom: 10px;
  width: ${({ isTime }) => (isTime ? '50px' : '80px')};
  background: ${({ isAppointment }) => (isAppointment ? '#8fcf7f' : '#d2bbe2')};
  height: 25px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

const DayViewText = styled(Text)`
  color: ${({ theme }) => theme.color.primary};
`

const TimeSlotText = styled(Text)`
  color: #491f69;
  text-align: center;
  word-break: inherit;
  font-size: 14px;
  margin-bottom: ${({ noGutter }) => (noGutter ? 0 : '10px')};

  font-weight: bold;
`
const TimeSlotContainer = styled(View)`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  // width: 100%;
`
