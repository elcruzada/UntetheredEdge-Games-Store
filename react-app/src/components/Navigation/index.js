import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import UElogo from '../../images/UE_logo.png'
import './Navigation.css';

function Navigation({ isLoaded }){
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='navbar-wrapper'>
		<ul>
			<div className='top-left-navbar'>
			<li>
				<img
				src={UElogo}
				style={{height: '6rem', cursor: 'pointer', marginTop: '.25rem', marginLeft: '.75rem'}}
				onClick={() => history.push('/')}
				>


				</img>
			</li>
			<li

			>
				<NavLink
				style={{textDecoration: 'none', color: 'white'}}
				exact to="/">HOME</NavLink>
			</li>
			<li
			// style={{}}
			>
				<NavLink
				exact to='/developer'
				style={{textDecoration: 'none', color: 'white'}}
				>
					PUBLISH WITH US
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
