import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    firstname: localStorage.getItem('firstname'),
    lastname: localStorage.getItem('lastname')
  }
})