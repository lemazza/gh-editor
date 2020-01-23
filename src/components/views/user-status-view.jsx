import React from 'react';

import { getCookie, deleteCookie } from '../../utils/cookie-fns';

export default function UserStatusView({ setLoggedIn }) {
  const usernameCookie = getCookie('username');
  const username = usernameCookie || 'props.username';

  // should probably redirect after logout
  function logOut() {
    deleteCookie('username');
    deleteCookie('authToken');
    setLoggedIn(false);
  }

  return (
    <div className="navbar-text">
      <span className="mr-2">{username}</span>
      <button type="button" className="btn btn-primary btn-sm" onClick={logOut}>
        log out
      </button>
    </div>
  );
}
