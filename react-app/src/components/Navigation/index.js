import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import UElogo from '../../images/UE_logo.png'
import './Navigation.css';

function Navigation({ isLoaded }) {
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
	const [home, setHome] = useState(false)
	const [homeUnderline, setHomeUnderline] = useState(true)
	const [publish, setPublish] = useState(false)
	const [publishUnderline, setPublishUnderline] = useState(false)

	return (
		<div className='navbar-wrapper'>
			<ul>
				<div className='top-left-navbar'>
					<li>
						<img
							src={UElogo}
							style={{ height: '6rem', cursor: 'pointer', marginTop: '.25rem', marginLeft: '.75rem' }}
							onClick={() => history.push('/')}
						>


						</img>
					</li>
					<li

					>
						<NavLink
							style={{ textDecoration: homeUnderline ? 'underline' : 'none', color: home ? 'rgb(198, 151, 73)' : 'white' }}
							onMouseEnter={() => setHome(true)}
							onMouseLeave={() => setHome(false)}
							onClick={() => {
								setHomeUnderline(true)
								setPublishUnderline(false)
							}
							}
							exact to="/">HOME</NavLink>
					</li>
					<li
					>
						<NavLink
							exact to='/developer'
							style={{ textDecoration: publishUnderline ? 'underline' : 'none', color: publish ? 'rgb(198, 151, 73)' : 'white' }}
							onMouseEnter={() => setPublish(true)}
							onMouseLeave={() => setPublish(false)}
							onClick={() => {
								setHomeUnderline(false)
								setPublishUnderline(true)
							}
							}
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
