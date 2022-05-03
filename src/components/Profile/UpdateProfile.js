import React, { Component } from 'react'
import { showProfile, updateProfile } from '../../api/profile'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom'

class UpdateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      first: '',
      last: ''
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showProfile(match.params.id, user)
      .then((res) =>
        this.setState({
          username: res.data.profile.username,
          first: res.data.profile.first,
          last: res.data.profile.last
        })
      )
      .then(() => {
        msgAlert({
          heading: 'Show profile success',
          message: 'Profile success!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show profile failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history, match } = this.props

  updateProfile(this.state, match.params.id, user)
    .then(() => history.push('/profile/' + match.params.id))
    .then(() => {
      msgAlert({
        heading: 'Updated Profile',
        message: 'Profile updated',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Update failed',
        message: 'Update error: ' + error.message,
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

export default withRouter(UpdateProfile)
