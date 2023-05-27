import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='navbar-wrapper'>
		<ul>
			<div className='top-left-navbar'>

			<li

			>
				<NavLink
				style={{textDecoration: 'none', color: 'white', fontFamily: 'Segoe', fontWeight: 'light'}}
				exact to="/">HOME</NavLink>
			</li>
			<li

			>
				<NavLink
				exact to='/developer'
				style={{textDecoration: 'none', color: 'white', fontFamily: 'Segoe', fontWeight: 'light'}}
				>
					PUBLISH WITH US TODAY
				</NavLink>
			</li>
			</div>
		</ul>
			{isLoaded && (
				<div className='profile-button-login-wrapper'>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
