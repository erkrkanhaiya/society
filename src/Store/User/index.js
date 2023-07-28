import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {},
  rooms: [],
  chatRoomID: null,
  messages: {},
  moodBox: {},
  notification: {},
  therapistProfile: {},
  subscription: {},
  scheduleList: [],
  myBookedEvents: [],
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPatientProfile: (state, { payload }) => {
      state.profile = payload
    },
    setActiveChatroom: (state, { payload }) => {
      state.rooms = payload
      state.chatRoomID = payload[0].chatroom_id
    },
    setMessages: (state, { payload }) => {
      state.messages = {
        data: payload?.data?.messages,
        pagination: payload?.pagination,
      }
    },
    setMoodBox: (state, { payload }) => {
      state.moodBox = payload
    },
    setNotification: (state, { payload }) => {
      state.notification = payload
    },
    setTherapistProfile: (state, { payload }) => {
      state.therapistProfile = payload
    },

    setSubscriptionStatus: (state, { payload }) => {
      state.subscription = {
        ...payload.data,
        exceedsswitchTherapist: payload?.exceedsswitchTherapist,
      }
    },
    setScheduleList: (state, { payload }) => {
      const myBookedEvents = []

      payload.forEach(day =>
        day.slots.forEach(event => {
          if (event.patient_id && event.status === 'booked')
            myBookedEvents.push({ ...event, schedule_date: day.schedule_date })
        }),
      )
      state.scheduleList = payload
      state.myBookedEvents = myBookedEvents
    },
  },
})

export const {
  setPatientProfile,
  setActiveChatroom,
  setMessages,
  setMoodBox,
  setNotification,
  setTherapistProfile,
  setSubscriptionStatus,
  setScheduleList,
} = slice.actions

export default slice.reducer
