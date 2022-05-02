/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Fragment } from 'react'
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './Elements'
import logo from './../logo.png'

const chatOptions = (
	<Fragment>
		<NavLink exact to='/chat' className='nav-link'>
			Chat
		</NavLink>
		<NavLink exact to='/profile' className='nav-link'>
			Profile
		</NavLink>
	</Fragment>
)

const authenticatedOptions = (
	<Fragment>
		<NavLink to='/change-password' className='nav-link'>
			Change Password
		</NavLink>
		<NavLink to='/sign-out' className='nav-link'>
			Sign Out
		</NavLink>
		{chatOptions}
	</Fragment>
)

const unauthenticatedOptions = (
	<Fragment>
		<NavLink to='/sign-up' className='nav-link'>
			Sign Up
		</NavLink>
		<NavLink to='/sign-in' className='nav-link'>
			Sign In
		</NavLink>
	</Fragment>
)

const alwaysOptions = (
	<Fragment>
		<NavLink exact to='/' className='nav-link'>
			<img src={logo} height='89px' width='89px' />
		</NavLink>
	</Fragment>
)

const Navbar = ({ user }) => {
	return (
		<>
			<Nav>
				<Bars />
				{alwaysOptions}
				<NavMenu>{user ? authenticatedOptions : unauthenticatedOptions}
				</NavMenu>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
			</Nav>
		</>
	)
}

export default Navbar
