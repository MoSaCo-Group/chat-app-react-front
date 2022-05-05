/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import io from 'socket.io-client'

const socket = io('http://localhost:4741')

class ChatRoomComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: [],
      newMessage: ''
    }
  }

  componentDidMount () {
    socket.on('chat', (message) => {
      console.log('connected')
    })
  }

  componentWillUnmount () {
    socket.close()
  }

  setNewMessage (event) {
    this.setState({
      newMessage: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    socket.emit('chat', {
        message: 'chat'
    })
  }

    render () {
    return (
      <div>
        hello
        <Button onClick={this.handleSubmit}>submit</Button>
      </div>
    )
  }
}

export default ChatRoomComponent
