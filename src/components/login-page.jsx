import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import LoginForm from './login-form';
const { REACT_APP_API_URL } = process.env;

export default function LoginPage(props) {
  //returns user to page they were trying to view after logging in
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    console.log(REACT_APP_API_URL);
    props.setLoggedIn(true);
    history.replace(from);
  };

  return (
    <div>  
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log In</button>
      <LoginForm />
    </div>
  )
}