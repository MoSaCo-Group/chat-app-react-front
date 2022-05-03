import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { showProfile, deleteProfile } from '../../api/profile'

class ShowProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showProfile(match.params.id, user)
      .then((res) => this.setState({ profile: res.data.profile }))
      .then(() => {
        msgAlert({
          heading: 'Show Profile success',
          message: 'Show Profile success',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show Profile failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

handleDelete = () => {
  const { match, user, msgAlert, history } = this.props

  deleteProfile(match.params.id, user)
    .then(() => history.push('/profile'))
    .then(() => {
      msgAlert({
        heading: 'Delete success',
        message: 'Successfully deleted',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Delete fail',
        message: 'Delete error: ' + error.message,
        variant: 'danger'
      })
    })
}

render () {
  if (this.state.profile === null) {
    return 'Loading...'
  }

  const { username, first, last, owner } = this.state.profile
  const { user, history, match } = this.props
  console.log(match.params)
  return (

    <>
      <h3>Your Profile</h3>
      <h4>Hello {username}!</h4>
      <p>First Name: {first}</p>
      <p>Last Name: {last}</p>
      {user._id === owner && (
        <>
          <Button onClick={this.handleDelete}>Delete</Button>
          <Button
            onClick={() => history.push(`/profile/${match.params.id}/edit`)}>
                        Update
          </Button>
        </>
      )}
    </>
  )
}
}

export default withRouter(ShowProfile)
