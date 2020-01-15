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
		<div>
			<span>
				{username}
			</span>
			<button onClick={logOut}>log out</button>
		</div>
  )
}