/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
	<Fragment>
		<NavLink to='/change-password' className='nav-link'>
			Change Password
		</NavLink>
		<NavLink to='/sign-out' className='nav-link'>
			Sign Out
		</NavLink>
		<NavLink to='/create-profile' className='nav-link'>
			Create/Update Profile
		</NavLink>
		<NavLink to='/Chat' className='nav-link'>
			Chat Room
		</NavLink>
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
			Home
		</NavLink>
	</Fragment>
)

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand>
			<Link to='/' style={{ color: '#ff5722', textDecoration: 'none' }}>
				Re-Chat
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
