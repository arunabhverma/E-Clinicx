import { call, put, takeEvery } from 'redux-saga/effects'
import {
  getVisitTypeData,
  getVisitTypeDataFailed,
  getVisitTypeDataSuccess,
  getSpecialityData,
  getSpecialityDataFailed,
  getSpecialityDataSuccess,
} from './slice'
import { API } from '../../services'

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

function* settingSaga() {
  yield takeEvery(getVisitTypeData, getVisitType)
  yield takeEvery(getSpecialityData, getSpeciality)
}

export default settingSaga
