import request from '@request'
import { BASE_URL } from './baseUrl'

export function fetchTrainingList(params) {
  return request(`${BASE_URL}/intrains`, 'post', {
    ...params,
    userId: JSON.parse(window.sessionStorage.getItem('userInfo')).userId
  })
}

export function fetchTrainingDetail(data) {
  return request(`${BASE_URL}/intrainDetail`, 'post', {
    userId: JSON.parse(window.sessionStorage.getItem('userInfo')).userId,
    ...data
  })
}

export function fetchTrainingAttachment(data) {
  return request(`${BASE_URL}/intrainAttach`, 'post', data)
}

export function trainingQcCodeCheckin(data) {
  return request(`${BASE_URL}/intrainQcCodeCheckin`, 'post', data)
}

export function trainingQcCodeCheckout(data) {
  return request(`${BASE_URL}/intrainQcCodeCheckout`, 'post', data)
}
