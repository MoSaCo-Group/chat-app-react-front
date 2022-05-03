import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChat = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/chat/',
    data: {
      chat: {
        name: data.name,
        message: data.message
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const indexChat = (user) => {
  return axios({
    url: apiUrl + '/chat/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
