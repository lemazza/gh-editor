import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route';
import LoginPage from './components/login-page';
import HomePage from './components/home-page';
import './App.css';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

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
