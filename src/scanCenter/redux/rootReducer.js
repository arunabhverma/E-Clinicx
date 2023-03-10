import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/slice'

const appReducer = combineReducers({
  authReducer,
})

const rootReducer = (state, action) => {
  if (action?.type === 'auth/userLogout') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer
