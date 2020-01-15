import React, { useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';

import {getCookie, setCookie, deleteCookie} from '../utils/cookie-fns';
import { postData } from '../utils/crud';
import { API_URL } from '../config';

export default function PrivateRoute({ loggedIn, setLoggedIn, children, ...rest }) {
  // display children if logged in, else redirects to /login page
  // loggedIn bool test function
  async function refreshCookie(tokenCookie) {
    try {
      console.log('tryin refreshCookie')
      const authResponse = await postData(API_URL + "/auth/refresh",{}, tokenCookie);
      if (!authResponse.authToken) {
        throw new Error("response does not contain authToken");
      } 
      setCookie("authToken", authResponse.authToken, 7);
      setCookie("username", authResponse.username, 7);
      setLoggedIn(true);
    } catch (error) {
      deleteCookie("authToken");
      deleteCookie("username")
      setLoggedIn(false);

      console.log('caught error in app.js')
      console.error(error);
    }
  }

  useEffect(() => {
    const tokenCookie = getCookie('authToken');
    if (!loggedIn && tokenCookie) {
      refreshCookie(tokenCookie);
      console.log('testing async')
    }
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}