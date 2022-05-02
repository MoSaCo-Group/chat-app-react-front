/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Fragment, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import logo from './../logo.png'
import './Header.css'

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
		<NavLink to='/sign-up'
			className='nav-link'>
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

function Header ({ user }) {
	const [isOpen, setIsOpen] = useState(false)

return (
	<Navbar bg='new' expand='lg'>
		<Navbar.Brand href='/'>
			<Link to='/' style={{ textDecoration: 'none', color: '#FFF' }}>
				<img src={logo} height='150px' width='150px' />
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle
			onClick={() => {
				setIsOpen()
			}}
			className='toggle'
			aria-controls='basic-navbar-nav'>
			Options
		</Navbar.Toggle>
		<Navbar.Collapse isOpen={isOpen} id='basic-navbar-nav'>
			<Nav>
				Auth Options
				<NavDropdown className='ml-auto'>
					{user && (
						<span className='navbar-text mr-2'>Welcome, {user.email}</span>
					)}
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)
					}
export default Header
