import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import createProfile from './components/api/profile'

class CreateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      first: '',
      last: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert } = this.props

  createProfile(this.state, user)
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
      <Form.Group controlId='username'>
        <Form.Label>User Name</Form.Label>
        <Form.Control
          required
          name='username'
          value={this.state.username}
          placeholder='User Name'
          onChange={this.handleChange}
        />
      </Form.Group>

      <Form.Group controlId='first'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          name='first'
          value={this.state.first}
          placeholder='First Name'
          onChange={this.handleChange}
        />
      </Form.Group>

      <Form.Group controlId='last'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          name='last'
          value={this.state.last}
          placeholder='Last Name'
          onChange={this.handleChange}
        />
      </Form.Group>

      <Button type='submit'>Submit</Button>
    </Form>
  )
}
}

export default CreateProfile
