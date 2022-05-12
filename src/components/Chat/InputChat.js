// state with 1 Message

import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { createChat } from '../../api/chat'
import './InputChat.css'
import {
  initiateSocketConnection,
  disconnectSocket,
  listenForChatMessage
} from './SocketWorker'

class InputChat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      body: ' '
    }
    // this.socket = io('http://localhost:4741')
  }

  // listening for chat messages emitted back from the server
  componentDidMount () {
    console.log('component did mount')
    // open socket connection
    initiateSocketConnection()
    // listen for message from server
    listenForChatMessage()
    console.log('listening from server')
    // listening to the 'emit axios' call from router that is sending back the created chat message.
    // this.socket.on('chat message', (data) => this.setState({ response: data }))
    return () => disconnectSocket()
  }

handleChange = (event) => {
  console.log('entering text')
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value
  })
}

// on submitting the form value, it emits a message to the server
handleSubmit = (event) => {
  event.preventDefault()
  console.log('submit button clicked')

  const { user, msgAlert } = this.props

  createChat(this.state.body, user)
    .then((res) => {
      console.log(res)
      msgAlert({
        heading: 'Chat created',
        message: 'Chat sent!',
        variant: 'success'
      })
      return res
    })
    .then((res) => {
      console.log(res.data.chat.body)
      // put messages into an array, so we can map through them later for display
      const messages = this.setState([{ res: res.data.chat.body }])
      return messages
    })

    .catch((error) => {
      msgAlert({
        heading: 'Chat creation failed',
        message: 'Chat creation error: ' + error.message,
        variant: 'danger'
      })
      console.log('axios call performed')
    })

  // listening to all events emitted from server
  // this.socket.on('chat message', (message) => {
  //   console.log('From server: ', message)
  // })
}

render () {
  return (
  // <><Toast className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  //   <Toast.Header className="toast-header">
  //     <strong className="me-auto">Bootstrap</strong>
  //     <small className="text-muted">just now</small>
  //     <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  //   </Toast.Header>
  //   <Toast.Body className="toast-body">
  //     {response}
  //   </Toast.Body>
  // </Toast>
    <>
      <Card className='messageDisplay'>
        <Card.Header>Message from User</Card.Header>
        <Card.Body>
          <div>Messages will go here</div>
        </Card.Body>
      </Card>
      <Card className='body'>
        <Card.Header as='h5'></Card.Header>
        <Card.Body>
          <Card.Title>Send Chat</Card.Title>
          <ul className='messages'></ul>
          <Form onSubmit={this.handleSubmit} className='form'>
            <input
              onChange={this.handleChange}
              name='body'
              value={this.state.body}
              autoComplete='off'
            />
            <Button type='submit'>Send</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
}

export default InputChat
