import { takeEvery } from 'redux-saga/effects'
import { userLogin } from './slice'

function* login() {}

function* authSaga() {
  yield takeEvery(userLogin, login)
}

export default authSaga
