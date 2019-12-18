import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({ loggedIn, children, ...rest }) {
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