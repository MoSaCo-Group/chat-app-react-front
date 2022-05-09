// state with 1 Message
import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { createChat } from '../../api/chat'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import io from 'socket.io-client'
import './InputChat.css'

const socket = io('http://localhost:7165/')

class InputChat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      body: ' '
    }
  }

  // do we need socket connection on each component?
  // listening for chat messages emitted back from the server
  componentDidMount () {
    socket.on('chat message', (data) => this.setState({ response: data }))
  }

  // message panel??

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
  if (this.state.body) {
    socket.emit('chat message', this.state.body)
    // this.setState({ body: ' ' })
  }

  const { user } = this.props
  createChat(this.state.body, user)

  // listening to all events emitted from server
  socket.on('From server', (message) => {
    console.log('From server: ', message)
  })
}

// socket.on('chat message', function(msg)) {

// }

render () {
  const { response } = this.state
  return (
    <>
      <Card className='messageDisplay'>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Display Chat</Card.Title>
          <div>
            <p>{response}</p>
          </div>
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
