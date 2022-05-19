import { io } from 'socket.io-client'

const ENDPOINT = 'http://localhost:4741'

let socket

export const initiateSocketConnection = () => {
  socket = io(ENDPOINT)
  console.log('Connecting socket from client...')
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

export const listenForChatMessage = (callback) => {
  socket.on('Chat Message', (data) => {
    console.log(data)
    callback(data.chat)
  })
}

export const createClientMessage = (body, user) => {
  socket.emit('client message', { body, user })
}

export const onReceiveMessage = (callback) => {
  socket.on('server message', (data) => {
    console.log(data)
    console.log(callback)
    callback(data)
    console.log('after callback', data)
  })
}
