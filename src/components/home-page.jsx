import React from 'react';
import NavigationContainer from './views/navigation-container.jsx';

export default function HomePage(props) {
 
  return (
    <div>
      <NavigationContainer setLoggedIn={props.setLoggedIn}>
        <h3>
          Home page text
        </h3>
        <p>home page other text</p>
      </NavigationContainer>
    </div>
  )
}