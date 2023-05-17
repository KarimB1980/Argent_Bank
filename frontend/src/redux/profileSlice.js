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

export const { profileFirstName, profileLastName } = profileSlice.actions
export default profileSlice.reducer