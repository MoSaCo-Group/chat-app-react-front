import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createChat } from '../../api/chat'

class Chat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }
  }

        handleChange = (event) =>
          this.setState({
            [event.target.message]: event.target.value
          })

        handleSubmit = (event) => {
          event.preventDefault()

          const { user, msgAlert } = this.props

          createChat(this.state, user)
            .then(() => {
              msgAlert({
                heading: 'Profile created',
                message: 'Profile created!',
                variant: 'success'
              })
            })
            .catch((error) => {
              msgAlert({
                heading: 'Profile creation failed',
                message: 'Profile error: ' + error.message,
                variant: 'danger'
              })
            })
        }

        render () {
          return (
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='message'>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  required
                  message=''
                  value={this.state.message}
                  placeholder='Start Chatting'
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button type='submit'>Submit</Button>
            </Form>
          )
        }
}

export default Chat
