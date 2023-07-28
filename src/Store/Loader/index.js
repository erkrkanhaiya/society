import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'loader',
  initialState: 0,
  reducers: {
    incrementLoader: state => {
      state = state + 1
    },
    decrementLoader: state => {
      state = state - 1
    },
  },
})

// export const { getPatientProfile } = slice.actions

export default slice.reducer
