import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    errorMsg: '',
    isLoading: false,
  },
  reducers: {
    userLogin: (state) => {
      state.isLoading = true
      state.errorMsg = ''
    },
    userLoginSuccess: (state, { payload: { payload } }) => {
      state.isLoading = false
      state.token = payload.data.token
    },
    userLoginFailed: (state, { payload }) => {
      state.token = null
      state.isLoading = false
      state.errorMsg = payload.message
    },
  },
})

export const { userLogin, userLoginFailed, userLoginSuccess } = slice.actions

export default slice.reducer
