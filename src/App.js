import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route';
import NavigationContainer from './components/views/navigation-container';
import {LoginPage} from './components/login-page';
import HomePage from './components/home-page';
import EditGamesPage from './components/pages/edit-games-page';
import QualityControlPage from './components/pages/quality-control-page';
import RemoveGamesPage from './components/pages/remove-games-page';
import ClickLogPage from './components/pages/click-log-page';
import ShelvesPage from './components/pages/shelves-page';
import OfficePage from './components/pages/office-page';
import EditUsersPage from './components/pages/edit-users-page';
import StaffPicksPage from './components/pages/staff-picks-page';
import IndividualGamePage from './components/pages/individual-game-page';
import IndividualUserPage from './components/pages/individual-user-page';

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

          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} exact path="/">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <HomePage />
            </NavigationContainer>
          </PrivateRoute>

          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} exact path="/games">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <EditGamesPage />
            </NavigationContainer>
          </PrivateRoute>

          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/games/:id">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <IndividualGamePage />
            </NavigationContainer>
          </PrivateRoute>

          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/quality-control">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <QualityControlPage />
            </NavigationContainer>
          </PrivateRoute>

          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/remove-games">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <RemoveGamesPage />
            </NavigationContainer>
          </PrivateRoute>

          <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/click-log">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <ClickLogPage />
            </NavigationContainer>
          </PrivateRoute>

           <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/shelves">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <ShelvesPage />
            </NavigationContainer>
          </PrivateRoute>

           <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/office">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <OfficePage />
            </NavigationContainer>
          </PrivateRoute>

          
           <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} exact path="/users">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <EditUsersPage />
            </NavigationContainer>
          </PrivateRoute>

          
           <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/users/:id">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <IndividualUserPage />
            </NavigationContainer>
          </PrivateRoute>
          
           <PrivateRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/staff-picks">
            <NavigationContainer setLoggedIn={setLoggedIn}>
              <StaffPicksPage />
            </NavigationContainer>
          </PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
