import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: "",
    lastName: ""
  },
  reducers: {
    profileFirstName: (state, action) => {
      state.firstName = action.payload
    },
    profileLastName: (state, action) => {
      state.lastName = action.payload
    }
  },
})

const { actions, reducer } = profileSlice
export const {
  profileFirstName,
  profileLastName
} = actions
export default reducer