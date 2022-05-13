import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChat = (data, user) => {
  console.log(data)
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
  console.log(user)
  return axios({
    method: 'GET',
    url: apiUrl + '/Chat/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
