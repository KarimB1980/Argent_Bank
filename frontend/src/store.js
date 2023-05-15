import { configureStore } from '@reduxjs/toolkit'

import reducer from './redux/profileSlice'

export const store = configureStore({
  reducer: {
    profile: reducer,
  }
})