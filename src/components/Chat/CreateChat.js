import React from 'react'
import io from 'socket.io-client'
// import chat from '../../../../chat-app-react-back/app/models/chat'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

const socket = io('http://localhost:7165')

class ChatRoomComponent extends React.Component {
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

  handleSubmit () {
    // event.preventDefault()
    socket.emit('chat', {
      message: 'chat'
    })
  }

  render () {
    return (
      <div>
        <InputGroup size='sm' className="justifyContent: 'space-between'">
          <InputGroup.Text>
            <Button variant='outline-secondary' onClick={this.handleSubmit}>
Send
            </Button>
          </InputGroup.Text>
          <FormControl as='textarea' aria-label='With textarea' />
        </InputGroup>
      </div>
    )
  }
}

export default ChatRoomComponent
