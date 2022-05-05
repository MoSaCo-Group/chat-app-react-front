import React, { Component } from 'react'
import io from 'socket.io-client'
import './Chat.css'
// import chat from '../../../../chat-app-react-back/app/models/chat'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { createChat } from '../../api/chat'

const socket = io('http://localhost:7165')

class CreateChat extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)

    this.state = {
      body: []
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

  handleSubmit (props) {
    // event.preventDefault()
    // socket.emit('chat', {
    //   body: ''

    const { user } = props
    const data = {
      body: ' '
    }
    createChat(data, user)
    // .then((msgAlert) => {
    //   msgAlert({
    //     heading: 'Message',
    //     message: 'Message Sent!',
    //     variant: 'success'
    //   })
    // })
    // .catch((error, msgAlert) => {
    //   msgAlert({
    //     heading: 'Message failed to send',
    //     message: 'Message error: ' + error.message,
    //     variant: 'danger'
    //   })
    // })
  }

  render () {
    return (
      <div>
        <InputGroup size='large' className="chat">
          <InputGroup.Text>
            <Button variant='outline-secondary' onClick={this.handleSubmit(this.props)}>
                  Send
            </Button>
          </InputGroup.Text>
          <FormControl as='textarea' aria-label='With textarea' />
        </InputGroup>
      </div>
    )
  }
}

export default CreateChat
