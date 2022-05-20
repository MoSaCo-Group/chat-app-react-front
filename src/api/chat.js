import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChat = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/Chat/',
    data: {
      chat: {
        body: data
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const indexChat = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/Chat/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
