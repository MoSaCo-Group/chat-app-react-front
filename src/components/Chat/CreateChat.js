/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import io from 'socket.io-client'
import './Chat.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import chat from '../../../../chat-app-react-back/app/models/chat'
import { Button, InputGroup, FormControl, Toast } from 'react-bootstrap'
import { createChat } from '../../api/chat'

const socket = io('http://localhost:7165')

class CreateChat extends Component {
	constructor (props) {
		super(props)
		console.log(this.props)

		this.state = {
			body: ' '
		}
	}

	handleClick = (user) => {
		axios({
			method: 'GET',
			url: apiUrl + '/index-chat',
      headers: {
      Authorization: `Bearer ${user.token}`
    }
		})
    .then((response) => this.setState({ body: response.data.body }))
    .then((response) => console.log(response))
		// socket.on('chat', (message) => {
		//   console.log('connected')
		// })
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

	// geniusIdea = () => {
	// 	handleSubmit()
  //   .then(handleClick)
	// }

	render () {
		return (
      <Fragment>
          <Toast className='one'>
            <Toast.Header>
              <img
                src='holder.js/20x20?text=%20'
                className='rounded me-2'
                alt='' />
              <strong className='me-auto'>
                Message from the Mo-Sa-Co Group Corp LLC
              </strong>
              <small>12:52 AM EST</small>
            </Toast.Header>
            <Toast.Body className='body'>
              This is how you will see your incoming and outgoing
              messages...maybe...hopefully...if cough cough ALEX BEERS cough
              cough helps us...
            </Toast.Body>
          </Toast>
      <Toast className='two'>
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded me-2'
              alt='' />
            <strong className='me-auto'>message from specifically moe</strong>
            <small className='text-muted'>2 seconds ago</small>
          </Toast.Header>
          <Toast.Body className='body'>again alex please god help us</Toast.Body>
        </Toast>
				<InputGroup size='large' className='chat'>
					<InputGroup.Text>
						<Button
							variant='outline-secondary'
							onClick={(props) => {
								this.handleSubmit(this.props)
								this.handleClick(this.props)
							}}>
							Send
						</Button>
					</InputGroup.Text>
					<FormControl as='textarea' aria-label='With textarea' />
					{/* <section>{this.data.body.show()}</section> */}
				</InputGroup>
			</Fragment>
		)
	}
}

export default CreateChat
