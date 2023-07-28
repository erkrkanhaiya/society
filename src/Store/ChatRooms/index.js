import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  therapyJourney: {
    data: [],
    submitFeedback: false,
    submitFinalFeedback: false,
  },
  rooms: [],
  chatRoomID: "",
  status: "",
  eachJournalList:{},
};
const slice = createSlice({
  name: 'chatrooms',
  initialState,
  reducers: {
    setTherapyJourney: (state, { payload }) => {
      state.therapyJourney = {
        ...state.therapyJourney,
        data: payload,
      }
    },
    setSubmitFeedback: (state, { payload }) => {
      state.therapyJourney = {
        ...state.therapyJourney,
        submitFeedback: payload?.submit_feedback,
        submitFinalFeedback: payload?.submit_final_feedback,
      }
    },
    setStatus: (state, { payload }) => {
      state.messages = payload;
    },
    setEachJournalList: (state, { payload }) => {
      state.eachJournalList = payload;
    }
  },
})

export const {
  setTherapyJourney,
  setSubmitFeedback,
  setStatus,
  setEachJournalList
} = slice.actions;

export default slice.reducer;
