import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChat = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/Chat/',
    data: {
      chat: {
        body: data.body
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const indexChat = (user) => {
  return axios({
    url: apiUrl + '/Chat',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
