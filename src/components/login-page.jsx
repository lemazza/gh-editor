import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import useForm from 'react-hook-form';
import * as yup from 'yup';

import { API_URL } from '../config';
import {setCookie} from '../utils/cookie-fns';
// form validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email()
    .trim(),
  password: yup
    .string()
    .required()
    .min(8)
    .trim(),
});

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json()
}

export function LoginPage(props) {
  //returns user to page they were trying to view after logging in
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  
  const onSubmit = async (data) => {
    //post to auth/login
    try {
      const authResponse = await postData(API_URL + "/auth/login", {...data});
      if (!authResponse.authToken) {
        throw new Error("response does not contain authToken");
      } 
      setCookie("authToken", authResponse.authToken, 7);  
      props.setLoggedIn(true);
      history.replace(from);
    } catch (error) {
      console.error(error);
    }
  };

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });


  return (
    <div>  
      <p>You must log in to view the page at {from.pathname}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        {errors.email && <span>{errors.email.message}</span>}
        <input name="email" ref={register} />
        
        <label htmlFor="password">Password:</label>
        {errors.password && <span>{errors.password.message}</span>}
        <input name="password" type="password" ref={register} />
  
        <input type="submit" />
      </form>
    </div>
  )
}