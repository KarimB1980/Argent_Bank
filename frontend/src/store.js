import { configureStore } from '@reduxjs/toolkit'

import { nameSlice } from './redux/nameSlice'

export const store = configureStore({
  reducer: {
    Name: nameSlice.reducer
  }
})