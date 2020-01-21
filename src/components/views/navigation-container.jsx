import React from 'react';
import {Link} from 'react-router-dom';
import UserStatusView from './user-status-view';

import './navigation-container.css'

export default function NavigationContainer(props) {
  console.log('headerview props', props);
  return (
    <div className="">
      <header>
        <nav className="navbar sticky-top navbar-collapse-md navbar-light bg-light">
          <button class="navbar-toggler mr-auto d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">GameHaus Editor</Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shelves</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Games
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Quality Control</a>
                  <a class="dropdown-item" href="#">Remove</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Click Log</a>
                  <a class="dropdown-item disabled" href="#">Recommended</a>
                  <a class="dropdown-item" href="#">Office</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="row">
        <div id="sidebar-container" class="sidebar-expanded d-none d-md-block col-2 bg-secondary p-0 min-vh-100 sandstone">
          <ul class="list-group">
            <li className="nav-text list-group-item bg-secondary text-light border-0">games</li>
            <a class="list-group-item list-group-item-action list-group-item-secondary border-top-0 active" href="#">Edit</a>
            <a class="list-group-item list-group-item-action list-group-item-secondary" href="#">QC</a>
            <a class="list-group-item list-group-item-action list-group-item-secondary" href="#">Remove</a>
            <a class="list-group-item list-group-item-action list-group-item-secondary" href="#">Click Log</a>
            <a class="list-group-item list-group-item-action list-group-item-secondary" href="#">Recommended</a>
            <a class="list-group-item list-group-item-action list-group-item-secondary " href="#">Office</a>
            <li className="nav-text list-group-item bg-secondary text-light border-0">users</li>
            <a class="list-group-item list-group-item-action list-group-item-secondary" href="#">Edit</a>
            <a class="list-group-item list-group-item-action list-group-item-secondary border-bottom-0 rounded-0" href="#">Staff Picks</a>
            
            <li className="nav-text list-group-item bg-secondary text-light border-0">
              
              <UserStatusView className="navbar-text" setLoggedIn={props.setLoggedIn} />
            </li>
          </ul>
        </div>
        
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>
  )
}