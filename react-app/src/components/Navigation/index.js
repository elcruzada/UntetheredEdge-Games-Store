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
			<li>
				<NavLink
				style={{textDecoration: 'none', color: 'white', fontFamily: 'Segoe', fontWeight: 'light'}}
				exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink
				exact to='/developer'
				style={{textDecoration: 'none', color: 'white', fontFamily: 'Segoe', fontWeight: 'light'}}
				>
					PUBLISH YOUR GAME WITH US TODAY
				</NavLink>
			</li>
			{isLoaded && (
				<div className='profile-button-login-wrapper'
				style={{marginRight: 'auto'}}
				>
				<li className="profile-button-wrapper">
					<ProfileButton user={sessionUser} />
				</li>
				</div>
			)}
		</ul>
		</div>
	);
}

export default Navigation;
