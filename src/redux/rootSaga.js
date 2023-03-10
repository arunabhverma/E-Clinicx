import { all } from 'redux-saga/effects'

//ambulance
import ambulanceAuthSaga from '../ambulance/redux/auth/saga'

//doctor
import doctorAuthSaga from '../doctor/redux/auth/saga'

//hospital
import hospitalAuthSaga from '../hospital/redux/auth/saga'

//lab
import labAuthSaga from '../lab/redux/auth/saga'

//patient
import patientAuthSaga from '../patient/redux/auth/saga'

export default function* rootSaga() {
  yield all([
    ambulanceAuthSaga(),
    doctorAuthSaga(),
    hospitalAuthSaga(),
    labAuthSaga(),
    patientAuthSaga(),
  ])
}
