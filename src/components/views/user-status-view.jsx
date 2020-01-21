import React from 'react';

import {getCookie, deleteCookie} from '../../utils/cookie-fns';

export default function UserStatusView(props) {
	let usernameCookie = getCookie('username');
	let username = usernameCookie || 'props.username';
	 
	 // should probably redirect after logout
	function logOut() {
		console.log('removing cookies');
		deleteCookie('username');
		deleteCookie('authToken');
		props.setLoggedIn(false);
	}
	
  return (
		<div className="navbar-text" >
			<span className="mr-2">
				{username}
			</span>
			<button type="button" class="btn btn-primary btn-sm" onClick={logOut}>log out</button>
		</div>
  )
}