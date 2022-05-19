
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
    console.log('component did mount')
    // open socket connection
    initiateSocketConnection()
    // listen for message from server and receiving message data
    // onReceiveMessage((data) => this.setState({ messages: data }))
    onReceiveMessage(data => this.setState(prevState => ({ messages: [...prevState.messages, { data }] } // don't touch this!!!
    )))

    // onReceiveMessage((data) =>
    // this.setState((prevState) => ({
    // messages: [...prevState.messages, { data: data.messages }],
    // })) // don't touch this!!!
    // )
    // socket.on('server message', (data) => this.setState(prevState => ({ messages: [...prevState.messages, { data: data.messages }] })))
    // onReceiveMessage(data => this.setState(prev => ({ messages: [...prev, data] })))

    // this.socket.on('chat message', (data) => this.setState({ response: data }))
  }

  componentWillUnmount () {
    disconnectSocket()
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

  const { user } = this.props

  createClientMessage(this.state.body, user)

  this.setState({ body: '' })

  // .then((res) => {
  //   console.log(res)
  //   console.log(res.data.chat._id)
  // //   msgAlert({
  // //     heading: 'Chat created',
  // //     message: 'Chat sent!',
  // //     variant: 'success'
  // //   })
  // //   return res
  // })
  // .then(() => {
  //   this.setState({ body: '' })
  // })
  // .catch((error) => {
  //   msgAlert({
  //     heading: 'Chat creation failed',
  //     message: 'Chat creation error: ' + error.message,
  //     variant: 'danger'
  //   })
  // })

  // createChat(this.state.body, user)
  //   .then((res) => {
  //     console.log(res)
  //     console.log(res.data.chat._id)
  //     msgAlert({
  //       heading: 'Chat created',
  //       message: 'Chat sent!',
  //       variant: 'success'
  //     })
  //     return res
  //   })
  //   .then(() => {
  //     this.setState({ body: '' })
  //   })
  //   .catch((error) => {
  //     msgAlert({
  //       heading: 'Chat creation failed',
  //       message: 'Chat creation error: ' + error.message,
  //       variant: 'danger'
  //     })
  //   })

  // indexChat(user)
  //   .then((res) => this.setState({ messages: res.data.chat }))
  //   .then(() => console.log(this.state.messages))
}

render () {
  // const messageJsx = this.state.messages.map((message) => (
  //   <Message key={message.id} message={message} />
  // ))

  const { messages } = this.state
  const { user } = this.props
  let messagesJSX
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
