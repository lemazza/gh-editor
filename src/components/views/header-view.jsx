import React from 'react';
import {Link} from 'react-router-dom';
import UserStatusView from './user-status-view';

export default function HeaderView(props) {
  console.log('headerview props', props);
  return (
    <header>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <Link to="/" className="navbar-brand">GameHaus Editor</Link>
        
        <UserStatusView setLoggedIn={props.setLoggedIn} />
      </nav>
    </header>
  )
}