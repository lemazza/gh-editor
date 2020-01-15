import React from 'react';
import HeaderView from './views/header-view.jsx';

export default function HomePage(props) {
 
  return (
    <div>
      <HeaderView setLoggedIn={props.setLoggedIn} />
    
      This is the Home Page
      needs link to user page, shelves, games, game search
    </div>
  )
}