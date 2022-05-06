// state with 1 Message
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import { indexChat } from '../../api/chat'

class ChatBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      body: []
    }
  }

  componentDidMount (props) {
    axios({
			method: 'GET',
			url: apiUrl + '/Chat'
		})


    indexChat(user)
      .then(({data}) => this.setState({data}))
      .then((response) => console.log(response))
  }

  handleChange (props) {
   
  }

  render () {
    return (
      <Card>
        <Card.Header as='h5'>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Form>
          <Button onSubmit={handleChange}>Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default ChatBox
