// state with 1 Message
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

class ChatBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  render () {
    return (
      <Card>
        <Card.Header as='h5'>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>message box</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default ChatBox
