
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { createChat, indexChat } from '../../api/chat'
import './InputChat.css'
import {
  initiateSocketConnection,
  disconnectSocket,
  listenForChatMessage
} from './SocketWorker'
import ScrollToBottom from 'react-scroll-to-bottom'

class InputChat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      body: ' ',
      messages: []
    }
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
      console.log(res.data.chat._id)
      msgAlert({
        heading: 'Chat created',
        message: 'Chat sent!',
        variant: 'success'
      })
      return res
    })
    .then(() => {
      this.setState({ body: '' })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Chat creation failed',
        message: 'Chat creation error: ' + error.message,
        variant: 'danger'
      })
    })

  indexChat(user)
    .then((res) => this.setState({ messages: res.data.chat }))
    .then(() => console.log(this.state.messages))
}

render () {
  const { messages } = this.state
  const { user } = this.props
  let messagesJSX
  if (!messages) {
    messagesJSX = 'Loading...'
  } else {
    messagesJSX = messages.map((message) => {
      if (message.owner === user._id) {
        return <div className='owner-message' key={message._id}>{message.body}</div>
      } else {
        return <div className='each-message' key={message._id}>{message.body}</div>
      }
    })
  }

  return (
    <>
      <div className='main-container'>
        <div className='chat-window'>
          <div className='chat-body'>
            <ScrollToBottom className='message-container'>
              <div className='message-index'>{messagesJSX}</div>
              <br></br>
            </ScrollToBottom>
          </div>
        </div>
      </div>

      <div className='chat-footer'>
        <Form onSubmit={this.handleSubmit} className='form'>
          <input
            type='text'
            className='form-control'
            placeholder='Hi there...'
            onChange={this.handleChange}
            name='body'
            value={this.state.body}
            autoComplete='off'
          />
          <Button className='form-button btn btn-outline-light' type='submit'>Send
          </Button>
        </Form>
      </div>
    </>
  )
}
}

export default InputChat
