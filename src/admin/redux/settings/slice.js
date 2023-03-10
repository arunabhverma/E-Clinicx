import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'settings',
  initialState: {
    visitTypes: [],
    specialities: [],
    errorMsg: '',
    visitLoading: false,
    specialityLoading: false,
  },
  reducers: {
    getVisitTypeData: (state) => {
      state.visitLoading = true
      state.errorMsg = ''
    },
    getVisitTypeDataSuccess: (state, { payload: { payload } }) => {
      state.visitLoading = false
      state.visitTypes = payload.data
    },
    getVisitTypeDataFailed: (state, { payload }) => {
      state.token = null
      state.visitLoading = false
    },
    getSpecialityData: (state) => {
      state.specialityLoading = true
      state.errorMsg = ''
    },
    getSpecialityDataSuccess: (state, { payload: { payload } }) => {
      state.specialityLoading = false
      state.specialities = payload.data
    },
    getSpecialityDataFailed: (state, { payload }) => {
      state.token = null
      state.specialityLoading = false
    },
  },
})

export const {
  getVisitTypeData,
  getVisitTypeDataSuccess,
  getVisitTypeDataFailed,
  getSpecialityData,
  getSpecialityDataFailed,
  getSpecialityDataSuccess,
} = slice.actions

export default slice.reducer
