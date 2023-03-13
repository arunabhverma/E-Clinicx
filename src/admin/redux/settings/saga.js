import { call, put, takeEvery } from 'redux-saga/effects'
import {
  //add visit
  addVisitTypeData,
  addVisitTypeSuccess,
  addVisitTypeFailed,
  //update visit
  updateVisitTypeData,
  updateVisitTypeDataSuccess,
  updateVisitTypeDataFailed,
  //delete Speciality
  deleteVisitTypesData,
  deleteVisitTypeSuccess,
  deleteVisitTypeFailed,
  //get visit
  getVisitTypeData,
  getVisitTypeDataFailed,
  getVisitTypeDataSuccess,

  //add Speciality
  addSpecialityData,
  addSpecialityDataFailed,
  addSpecialityDataSuccess,
  //update Speciality
  updateSpecialityData,
  updateSpecialityDataFailed,
  updateSpecialityDataSuccess,
  //delete Speciality
  deleteSpecialityData,
  deleteSpecialityDataFailed,
  deleteSpecialityDataSuccess,
  //get Speciality
  getSpecialityData,
  getSpecialityDataFailed,
  getSpecialityDataSuccess,

  //add Education
  addEducationData,
  addEducationDataFailed,
  addEducationDataSuccess,
  //update Education
  updateEducationData,
  updateEducationDataFailed,
  updateEducationDataSuccess,
  //delete Education
  deleteEducationData,
  deleteEducationDataFailed,
  deleteEducationDataSuccess,
  //get Education
  getEducationData,
  getEducationDataFailed,
  getEducationDataSuccess,

  //add Education
  addSpecialInterestData,
  addSpecialInterestDataFailed,
  addSpecialInterestDataSuccess,
  //update Education
  updateSpecialInterestData,
  updateSpecialInterestDataFailed,
  updateSpecialInterestDataSuccess,
  //delete Education
  deleteSpecialInterestData,
  deleteSpecialInterestDataFailed,
  deleteSpecialInterestDataSuccess,
  //get Education
  getSpecialInterestData,
  getSpecialInterestDataFailed,
  getSpecialInterestDataSuccess,
} from './slice'
import { API } from '../../services'

function* addVisitType({ type, payload }) {
  try {
    const response = yield call(API.settingApi.addVisitType, payload)
    if (response.data && response.status === 200) {
      yield put(addVisitTypeSuccess({ payload: response?.data }))
    } else {
      yield put(addVisitTypeFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(addVisitTypeFailed({ message: error?.message }))
  }
}

function* updateVisitType({ type, payload }) {
  try {
    const response = yield call(API.settingApi.updateVisitType, payload)
    if (response.data && response.status === 200) {
      yield put(updateVisitTypeDataSuccess({ payload: response?.data }))
    } else {
      yield put(updateVisitTypeDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(updateVisitTypeDataFailed({ message: error?.message }))
  }
}

function* getVisitType() {
  try {
    const response = yield call(API.settingApi.visitType)
    if (response.data && response.status === 200) {
      yield put(getVisitTypeDataSuccess({ payload: response?.data }))
    } else {
      yield put(getVisitTypeDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(getVisitTypeDataFailed({ message: error?.message }))
  }
}

function* deleteVisitType({ type, payload }) {
  try {
    const response = yield call(API.settingApi.deleteVisitType, payload)
    if (response.data && response.status === 200) {
      yield put(deleteVisitTypeSuccess({ payload: response?.data }))
    } else {
      yield put(deleteVisitTypeFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(deleteVisitTypeFailed({ message: error?.message }))
  }
}

function* addSpeciality({ type, payload }) {
  try {
    const response = yield call(API.settingApi.addSpeciality, payload)
    if (response.data && response.status === 200) {
      yield put(addSpecialityDataSuccess({ payload: response?.data }))
    } else {
      yield put(addSpecialityDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(addSpecialityDataFailed({ message: error?.message }))
  }
}

function* updateSpeciality({ type, payload }) {
  try {
    const response = yield call(API.settingApi.updateSpeciality, payload)
    if (response.data && response.status === 200) {
      yield put(updateSpecialityDataSuccess({ payload: response?.data }))
    } else {
      yield put(updateSpecialityDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(updateSpecialityDataFailed({ message: error?.message }))
  }
}

function* getSpeciality() {
  try {
    const response = yield call(API.settingApi.speciality)
    if (response.data && response.status === 200) {
      yield put(getSpecialityDataSuccess({ payload: response?.data }))
    } else {
      yield put(getSpecialityDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(getSpecialityDataFailed({ message: error?.message }))
  }
}

function* deleteSpeciality({ type, payload }) {
  try {
    const response = yield call(API.settingApi.deleteSpeciality, payload)
    if (response.data && response.status === 200) {
      yield put(deleteSpecialityDataSuccess({ payload: response?.data }))
    } else {
      yield put(deleteSpecialityDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(deleteSpecialityDataFailed({ message: error?.message }))
  }
}

function* addEducation({ type, payload }) {
  try {
    const response = yield call(API.settingApi.addEducation, payload)
    if (response.data && response.status === 200) {
      yield put(addEducationDataSuccess({ payload: response?.data }))
    } else {
      yield put(addEducationDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(addEducationDataFailed({ message: error?.message }))
  }
}

function* updateEducation({ type, payload }) {
  try {
    const response = yield call(API.settingApi.updateEducation, payload)
    if (response.data && response.status === 200) {
      yield put(updateEducationDataSuccess({ payload: response?.data }))
    } else {
      yield put(updateEducationDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(updateEducationDataFailed({ message: error?.message }))
  }
}

function* getEducation() {
  try {
    const response = yield call(API.settingApi.education)
    if (response.data && response.status === 200) {
      yield put(getEducationDataSuccess({ payload: response?.data }))
    } else {
      yield put(getEducationDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(getEducationDataFailed({ message: error?.message }))
  }
}

function* deleteEducation({ type, payload }) {
  try {
    const response = yield call(API.settingApi.deleteEducation, payload)
    if (response.data && response.status === 200) {
      yield put(deleteEducationDataSuccess({ payload: response?.data }))
    } else {
      yield put(deleteEducationDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(deleteEducationDataFailed({ message: error?.message }))
  }
}

function* addSpecialInterest({ type, payload }) {
  try {
    const response = yield call(API.settingApi.addSpecialInterest, payload)
    if (response.data && response.status === 200) {
      yield put(addSpecialInterestDataSuccess({ payload: response?.data }))
    } else {
      yield put(addSpecialInterestDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(addSpecialInterestDataFailed({ message: error?.message }))
  }
}

function* updateSpecialInterest({ type, payload }) {
  try {
    const response = yield call(API.settingApi.updateSpecialInterest, payload)
    if (response.data && response.status === 200) {
      yield put(updateSpecialInterestDataSuccess({ payload: response?.data }))
    } else {
      yield put(updateSpecialInterestDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(updateSpecialInterestDataFailed({ message: error?.message }))
  }
}

function* getSpecialInterest() {
  try {
    const response = yield call(API.settingApi.specialInterest)
    if (response.data && response.status === 200) {
      yield put(getSpecialInterestDataSuccess({ payload: response?.data }))
    } else {
      yield put(getSpecialInterestDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(getSpecialInterestDataFailed({ message: error?.message }))
  }
}

function* deleteSpecialInterest({ type, payload }) {
  try {
    const response = yield call(API.settingApi.deleteSpecialInterest, payload)
    if (response.data && response.status === 200) {
      yield put(deleteSpecialInterestDataSuccess({ payload: response?.data }))
    } else {
      yield put(deleteSpecialInterestDataFailed({ message: response.message }))
    }
  } catch (error) {
    yield put(deleteSpecialInterestDataFailed({ message: error?.message }))
  }
}

function* settingSaga() {
  yield takeEvery(updateVisitTypeData, updateVisitType)
  yield takeEvery(addVisitTypeData, addVisitType)
  yield takeEvery(getVisitTypeData, getVisitType)
  yield takeEvery(deleteVisitTypesData, deleteVisitType)

  yield takeEvery(updateSpecialityData, updateSpeciality)
  yield takeEvery(addSpecialityData, addSpeciality)
  yield takeEvery(getSpecialityData, getSpeciality)
  yield takeEvery(deleteSpecialityData, deleteSpeciality)

  yield takeEvery(updateEducationData, updateEducation)
  yield takeEvery(addEducationData, addEducation)
  yield takeEvery(getEducationData, getEducation)
  yield takeEvery(deleteEducationData, deleteEducation)

  yield takeEvery(updateSpecialInterestData, updateSpecialInterest)
  yield takeEvery(addSpecialInterestData, addSpecialInterest)
  yield takeEvery(getSpecialInterestData, getSpecialInterest)
  yield takeEvery(deleteSpecialInterestData, deleteSpecialInterest)
}

export default settingSaga
