import { combineReducers } from '@reduxjs/toolkit'

//admin
import adminSettingReducer from '../admin/redux/settings/slice'

//ambulance
import ambulanceAuthReducer from '../ambulance/redux/auth/slice'

//doctor
import doctorAuthReducer from '../doctor/redux/auth/slice'

//hospital
import hospitalAuthReducer from '../hospital/redux/auth/slice'

//lab
import labAuthReducer from '../lab/redux/auth/slice'

//patient
import patientAuthReducer from '../patient/redux/auth/slice'

const appReducer = combineReducers({
  adminSettingReducer,
  ambulanceAuthReducer,
  doctorAuthReducer,
  hospitalAuthReducer,
  labAuthReducer,
  patientAuthReducer,
})

const rootReducer = (state, action) => {
  if (action?.type === 'auth/userLogout') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer
