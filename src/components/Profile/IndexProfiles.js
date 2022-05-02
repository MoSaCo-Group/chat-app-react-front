import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexProfiles } from '../../api/profile'

class IndexProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profiles: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexProfiles(user)
      .then(res => this.setState({ profiles: res.data.profiles }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Successfully indexed',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { profiles } = this.state

    if (profiles === null) {
      return 'Loading...'
    }

    let profilesJSX
    if (profiles.length === 0) {
      profilesJSX = 'No profiles created.'
    } else {
      profilesJSX = profiles.map(profile => (
        <li key={profile._id}>
          <Link to={`/profiles/${profile._id}`}>{profile.username}
          </Link>
        </li>
      ))
    }
    return (
      <><h3>All Profiles:</h3>
        <ul>
          {profilesJSX}
        </ul>

      </>
    )
  }
}

export default IndexProfile
