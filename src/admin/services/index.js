import axios from 'axios'
import * as Config from '../config'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000000,
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const API = {
  settingApi: {
    visitType: () => instance.get(Config.VISIT_TYPE),
    speciality: () => instance.get(Config.SPECIALITY),
  },
}
