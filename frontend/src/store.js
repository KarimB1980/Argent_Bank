import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './redux/nameSlice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  }
})