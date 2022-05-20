import { io } from 'socket.io-client'

const ENDPOINT = 'http://localhost:4741'

let socket
// opening the Socket connection
export const initiateSocketConnection = () => {
  socket = io(ENDPOINT)
}

// disconnecting from Socket
export const disconnectSocket = () => {
  if (socket) socket.disconnect()
}

// listening for socket connection
export const listenForChatMessage = (callback) => {
  socket.on('Chat Message', (data) => {
    callback(data.chat)
  })
}

// creating and emitting client-side message
export const createClientMessage = (body, user) => {
  socket.emit('client message', { body, user })
}

// receiving the message back from server
export const onReceiveMessage = (callback) => {
  socket.on('server message', (data) => {
    callback(data)
  })
}
