/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React from 'react'
import io from 'socket.io-client'
// import chat from '../../../../chat-app-react-back/app/models/chat'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { createChat } from '../../api/chat'

const socket = io('http://localhost:7165')

class CreateChat extends React.Component {
	constructor (props) {
		super(props)

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

	handleSubmit () {
		// event.preventDefault()
		socket.emit('chat', {
			body: ''
		})
		createChat()
			.then((msgAlert) => {
				msgAlert({
					heading: 'Message',
					message: 'Message Sent!',
					variant: 'success'
				})
			})
			.catch((error, msgAlert) => {
				msgAlert({
					heading: 'Message failed to send',
					message: 'Message error: ' + error.message,
					variant: 'danger'
				})
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

export default CreateChat
