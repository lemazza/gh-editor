import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route';
import {LoginPage} from './components/login-page';
import HomePage from './components/home-page';

import { getCookie } from './utils/cookie-fns';

import 'bootswatch/dist/sandstone/bootstrap.min.css';
import './App.css';

function App() {
  const authCookie = getCookie("authToken");
  let initLoggedInStatus = authCookie ? true : false;

  const [ loggedIn, setLoggedIn ] = useState(initLoggedInStatus);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/">
            <HomePage setLoggedIn={setLoggedIn} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
