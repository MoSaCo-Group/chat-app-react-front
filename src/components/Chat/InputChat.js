
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './InputChat.css'
import {
  initiateSocketConnection,
  disconnectSocket,
  createClientMessage,
  onReceiveMessage
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
    // open socket connection
    initiateSocketConnection()
    // listen for message from server and receiving message data
    // setting State and storing received messages into 'messages' array
    onReceiveMessage(data => this.setState(prevState => ({ messages: [...prevState.messages, { data }] }
    )))
  }

  componentWillUnmount () {
    disconnectSocket()
  }

handleChange = (event) => {
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value
  })
}

// on submitting the form value, it emits a message to the server
handleSubmit = (event) => {
  event.preventDefault()
  const { user } = this.props

  // Creating new chat message, passing user input
  createClientMessage(this.state.body, user)
  this.setState({ body: '' })
}

render () {
  const { messages } = this.state
  const { user } = this.props
  let messagesJSX
  // mapping through messages
  // use conditional statement to differentiate users by color
  if (!messages) {
    messagesJSX = 'Loading...'
  } else {
    messagesJSX = messages.map((message, index) => {
      if (message.data.user._id === user._id) {
        return <div className='owner-message' key={index}>{message.data.body}</div>
      } else {
        return <div className='each-message' key={index}>{message.data.body}</div>
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
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Hi there...'
              onChange={this.handleChange}
              name='body'
              value={this.state.body}
              autoComplete='off'
              aria-label='chat message'
            />
            <Button
              className='form-button btn btn-light'
              type='submit'>Send
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
}

export default InputChat
