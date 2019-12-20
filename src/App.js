import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route';
import {LoginPage} from './components/login-page';
import HomePage from './components/home-page';
import {getCookie} from './utils/cookie-fns';

import './App.css';


const initialBool = getCookie("authToken") ? true : false

function App() {
  const [ loggedIn, setLoggedIn ] = useState(initialBool);
  
  useEffect(() => {
    const token = getCookie('authToken')
    console.log('loggedIn: ', loggedIn)
    console.log('token', token);
    token ? setLoggedIn(true) : setLoggedIn(false);
  }, [loggedIn]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <PrivateRoute loggedIn={loggedIn} path="/">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
