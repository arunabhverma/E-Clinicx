import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const slice = createSlice({
  name: 'settings',
  initialState: {
    visitTypes: [],
    specialities: [],
    educations: [],
    specialInterests: [],

    errorMsg: '',

    visitLoading: false,
    specialityLoading: false,
    educationLoading: false,
    specialInterestLoading: false,
  },
  reducers: {
    //addVisitType
    addVisitTypeData: (state, { payload }) => {
      const last = state.visitTypes[state.visitTypes.length - 1]?.id || 0
      state.visitTypes = [
        ...state.visitTypes,
        { id: last + 1, ...payload, created_at: moment().format() },
      ]
    },
    addVisitTypeSuccess: (state) => {},
    addVisitTypeFailed: (state) => {},

    //updateVisit
    updateVisitTypeData: (state, { payload }) => {
      state.visitTypes = state.visitTypes.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data }
        } else {
          return item
        }
      })
    },
    updateVisitTypeDataSuccess: (state) => {},
    updateVisitTypeDataFailed: (state) => {},

    //getVisitType
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

    //deleteVisitType
    deleteVisitTypesData: (state, { payload }) => {
      state.visitTypes = state.visitTypes.filter((item) => item.id !== payload)
    },
    deleteVisitTypeSuccess: (state, { payload }) => {},
    deleteVisitTypeFailed: (state, { payload }) => {},

    //getSpeciality
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

    //AddSpeciality
    addSpecialityData: (state, { payload }) => {
      const last = state.specialities[state.specialities.length - 1]?.id || 0
      state.specialities = [
        ...state.specialities,
        { id: last + 1, ...payload, created_at: moment().format() },
      ]
    },
    addSpecialityDataSuccess: (state) => {},
    addSpecialityDataFailed: (state) => {},

    //deleteSpeciality
    deleteSpecialityData: (state, { payload }) => {
      state.specialities = state.specialities.filter((item) => item.id !== payload)
    },
    deleteSpecialityDataSuccess: (state, { payload }) => {},
    deleteSpecialityDataFailed: (state, { payload }) => {},

    //update Speciality
    updateSpecialityData: (state, { payload }) => {
      state.specialities = state.specialities.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data }
        } else {
          return item
        }
      })
    },
    updateSpecialityDataSuccess: (state) => {},
    updateSpecialityDataFailed: (state) => {},

    //Get Education
    getEducationData: (state) => {
      state.educationLoading = true
      state.errorMsg = ''
    },
    getEducationDataSuccess: (state, { payload: { payload } }) => {
      state.educationLoading = false
      state.educations = payload.data
    },
    getEducationDataFailed: (state, { payload }) => {
      state.token = null
      state.educationLoading = false
    },

    //Add Education
    addEducationData: (state, { payload }) => {
      const last = state.educations[state.educations.length - 1]?.id || 0
      state.educations = [
        ...state.educations,
        { id: last + 1, ...payload, created_at: moment().format() },
      ]
    },
    addEducationDataSuccess: (state) => {},
    addEducationDataFailed: (state) => {},

    //delete Education
    deleteEducationData: (state, { payload }) => {
      state.educations = state.educations.filter((item) => item.id !== payload)
    },
    deleteEducationDataSuccess: (state, { payload }) => {},
    deleteEducationDataFailed: (state, { payload }) => {},

    //update Education
    updateEducationData: (state, { payload }) => {
      state.educations = state.educations.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data }
        } else {
          return item
        }
      })
    },
    updateEducationDataSuccess: (state) => {},
    updateEducationDataFailed: (state) => {},

    //Get SpecialInterest
    getSpecialInterestData: (state) => {
      state.specialInterestLoading = true
      state.errorMsg = ''
    },
    getSpecialInterestDataSuccess: (state, { payload: { payload } }) => {
      state.specialInterestLoading = false
      state.specialInterests = payload.data
    },
    getSpecialInterestDataFailed: (state, { payload }) => {
      state.token = null
      state.specialInterestLoading = false
    },

    //Add SpecialInterest
    addSpecialInterestData: (state, { payload }) => {
      const last = state.specialInterests[state.specialInterests.length - 1]?.id || 0
      state.specialInterests = [
        ...state.specialInterests,
        { id: last + 1, ...payload, created_at: moment().format() },
      ]
    },
    addSpecialInterestDataSuccess: (state) => {},
    addSpecialInterestDataFailed: (state) => {},

    //delete SpecialInterest
    deleteSpecialInterestData: (state, { payload }) => {
      state.specialInterests = state.specialInterests.filter((item) => item.id !== payload)
    },
    deleteSpecialInterestDataSuccess: (state, { payload }) => {},
    deleteSpecialInterestDataFailed: (state, { payload }) => {},

    //update SpecialInterest
    updateSpecialInterestData: (state, { payload }) => {
      state.specialInterests = state.specialInterests.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data }
        } else {
          return item
        }
      })
    },
    updateSpecialInterestDataSuccess: (state) => {},
    updateSpecialInterestDataFailed: (state) => {},
  },
})

export const {
  //addVisit
  addVisitTypeData,
  addVisitTypeSuccess,
  addVisitTypeFailed,
  //udpateVisit
  updateVisitTypeData,
  updateVisitTypeDataSuccess,
  updateVisitTypeDataFailed,
  //getVisit
  getVisitTypeData,
  getVisitTypeDataSuccess,
  getVisitTypeDataFailed,
  //deletevisit
  deleteVisitTypesData,
  deleteVisitTypeSuccess,
  deleteVisitTypeFailed,

  //get speciality
  getSpecialityData,
  getSpecialityDataFailed,
  getSpecialityDataSuccess,
  //add speciality
  addSpecialityData,
  addSpecialityDataSuccess,
  addSpecialityDataFailed,
  //delete speciality
  deleteSpecialityData,
  deleteSpecialityDataSuccess,
  deleteSpecialityDataFailed,
  //update speciality
  updateSpecialityData,
  updateSpecialityDataSuccess,
  updateSpecialityDataFailed,

  //get education
  getEducationData,
  getEducationDataFailed,
  getEducationDataSuccess,
  //add education
  addEducationData,
  addEducationDataSuccess,
  addEducationDataFailed,
  //delete education
  deleteEducationData,
  deleteEducationDataSuccess,
  deleteEducationDataFailed,
  //update education
  updateEducationData,
  updateEducationDataSuccess,
  updateEducationDataFailed,

  //get special interest
  getSpecialInterestData,
  getSpecialInterestDataFailed,
  getSpecialInterestDataSuccess,
  //add special interest
  addSpecialInterestData,
  addSpecialInterestDataSuccess,
  addSpecialInterestDataFailed,
  //delete special interest
  deleteSpecialInterestData,
  deleteSpecialInterestDataSuccess,
  deleteSpecialInterestDataFailed,
  //update special interest
  updateSpecialInterestData,
  updateSpecialInterestDataSuccess,
  updateSpecialInterestDataFailed,
} = slice.actions

export default slice.reducer
