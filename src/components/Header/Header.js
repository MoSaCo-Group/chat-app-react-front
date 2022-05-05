/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Fragment } from 'react'
import {
	Nav,
	NavLink,
	NavMenu
} from './Elements'
import rechatLogo from '../../Images/rechatLogo.png'

const chatOptions = (
	<Fragment>
		<NavLink exact to='/Chat' className='nav-link'>
			Chat
		</NavLink>
		<NavLink exact to='/create-profile' className='nav-link'>
			Create Profile
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
			<img src={rechatLogo} height='169px' width='169px'/>
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
