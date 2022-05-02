/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import Logo from './../logo.png'
import './Header.css'

const authenticatedOptions = (
	<Fragment>
		<NavLink to='/change-password' className='nav-link'>
			Change Password
		</NavLink>
		<NavLink to='/sign-out' className='nav-link'>
			Sign Out
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
	<Navbar bg='black' expand='xxl'>
		<Navbar.Brand>
			<Link to='/'>
				<img src={Logo} className='logo' />
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
