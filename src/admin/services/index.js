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
    //visit type
    visitType: () => instance.get(Config.VISIT_TYPE),
    deleteVisitType: (id) => instance.delete(`${Config.VISIT_TYPE}/${id}`),
    updateVisitType: (props) => instance.put(`${Config.VISIT_TYPE}/${props.id}`, props.data),
    addVisitType: (data) => instance.post(Config.VISIT_TYPE, data),
    //speciality
    speciality: () => instance.get(Config.SPECIALITY),
    deleteSpeciality: (id) => instance.delete(`${Config.SPECIALITY}/${id}`),
    updateSpeciality: (props) => instance.put(`${Config.SPECIALITY}/${props.id}`, props.data),
    addSpeciality: (data) => instance.post(Config.SPECIALITY, data),
    //education
    education: () => instance.get(Config.EDUCATION),
    deleteEducation: (id) => instance.delete(`${Config.EDUCATION}/${id}`),
    updateEducation: (props) => instance.put(`${Config.EDUCATION}/${props.id}`, props.data),
    addEducation: (data) => instance.post(Config.EDUCATION, data),
  },
}
