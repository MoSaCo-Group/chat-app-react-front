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

// const data = {
// chat: {
// body: '',
// },
// }

export const indexChat = (user) => {
  return axios({
    url: apiUrl + '/index-chat',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
