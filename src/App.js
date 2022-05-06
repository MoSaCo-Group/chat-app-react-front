/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './App.css'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import CreateChat from './components/Chat/CreateChat'

import CreateProfile from './components/Profile/CreateProfile'
import ShowProfile from './components/Profile/ShowProfile'
import UpdateProfile from './components/Profile/UpdateProfile'

// import IndexProfile from './components/Profile/IndexProfiles'

import Container from './components/Landing/Container'
import MoveStuffAround from './components/MoveStuffAround'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

      setUser = (user) => this.setState({ user })

      clearUser = () => this.setState({ user: null })

      deleteAlert = (id) => {
        this.setState((state) => {
          return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
        })
      }

      msgAlert = ({ heading, message, variant }) => {
        const id = uuid()
        this.setState((state) => {
          return {
            msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
          }
        })
      }

      render () {
        const { msgAlerts, user } = this.state

        return (
          <Fragment>
            <Router>
              <Header user={user} />
              {msgAlerts.map((msgAlert) => (
                <AutoDismissAlert
                  key={msgAlert.id}
                  heading={msgAlert.heading}
                  variant={msgAlert.variant}
                  message={msgAlert.message}
                  id={msgAlert.id}
                  deleteAlert={this.deleteAlert}
                />
              ))}
              <main className='container'>
                <Route exact path='/' render={() => <Container />} />
                <Route
                  path='/sign-up'
                  render={() => (
                    <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
                  )}
                />
                <Route
                  path='/sign-in'
                  render={() => (
                    <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
                  )}
                />
                <Route exact path='/critics' render={() => <MoveStuffAround />} />
                <AuthenticatedRoute
                  user={user}
                  path='/sign-out'
                  render={() => (
                    <SignOut
                      msgAlert={this.msgAlert}
                      clearUser={this.clearUser}
                      user={user}
                    />
                  )}
                />
                <AuthenticatedRoute
                  user={user}
                  path='/change-password'
                  render={() => (
                    <ChangePassword msgAlert={this.msgAlert} user={user} />
                  )}
                />
                <AuthenticatedRoute
                  user={user}
                  path='/create-profile'
                  render={() => (
                    <CreateProfile msgAlert={this.msgAlert} user={user} />
                  )}
                />
                <AuthenticatedRoute
                  exact
                  user={user}
                  path='/profile/:id'
                  render={() => (
                    <ShowProfile msgAlert={this.msgAlert} user={user} />
                  )}
                />
                <AuthenticatedRoute
                  user={user}
                  path='/profile/:id/edit'
                  render={() => (
                    <UpdateProfile msgAlert={this.msgAlert} user={user} />
                  )}
                />
                <AuthenticatedRoute
                  user={user}
                  exact
                  path='/Chat'
                  render={() => (
                    <CreateChat msgAlert={this.msgAlert} user={user} />
                  )}
                />
              </main>
            </Router>
          </Fragment>
        )
      }
}

export default App
