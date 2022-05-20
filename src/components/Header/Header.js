
import React, { Fragment } from 'react'
import {
  Nav,
  NavLink,
  NavMenu
} from './Elements'
import navLogo from '../../Images/navLogo.png'

const chatOptions = (
  <Fragment>
    <NavLink exact to='/Chat' className='nav-link'>Chat
    </NavLink>
  </Fragment>
)

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out
    </NavLink>
    <NavLink to='/create-profile' className='nav-link'>Create/Update Profile
    </NavLink>
    {chatOptions}
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>SIGN UP
    </NavLink>
    <NavLink to='/sign-in' className='nav-link'>SIGN IN
    </NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>
      <img src={navLogo} height='150px' width='160px'/>
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => {
  return (
    <>

      <Nav useTransparent>
        {alwaysOptions}
        <NavMenu>
          {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email}</span>
          )}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </NavMenu>
      </Nav>
    </>
  )
}

export default Header
