import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserStatusView from './user-status-view';

import './navigation-container.css'

export default function NavigationContainer(props) {
  const location = useLocation();
  console.log(location);

  function isActive(route) {
    return (route === location.pathname)? " active" : ""
  }

  return (
    <div className="">
      <header>
        <nav className="navbar sticky-top navbar-collapse-md navbar-light bg-light">
          <button class="navbar-toggler mr-auto d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand d-none d-md-block">GameHaus Editor</Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Games
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Edit Games</a>
                  <a class="dropdown-item" href="#">Quality Control</a>
                  <a class="dropdown-item" href="#">Remove</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Click Log</a>
                  <a class="dropdown-item disabled" href="#">Shelves</a>
                  <a class="dropdown-item" href="#">Office</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Staff Picks</a>
              </li>
            </ul>
          </div>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </header>

      <div className="row">
        <div id="sidebar-container" class="sidebar-expanded d-none d-md-block col-2 bg-secondary p-0 min-vh-100 sandstone">
          <ul class="list-group">
            <li className="nav-text list-group-item bg-secondary text-light border-0 align-right">games</li>
            <Link class={"list-group-item  list-group-item-action list-group-item-secondary border-top-0" + isActive('/games')} to="/games">Edit</Link>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary" + isActive('/quality-control')} to="/quality-control">Q.C.</Link>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary" + isActive('/remove-games')} to="/remove-games">Remove</Link>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary" + isActive('/click-log')} to="click-log">Click Log</Link>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary" + isActive('/shelves')} to="shelves">Shelves</Link>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary border-bottom-0 " + isActive('/office')} to="/office">Office</Link>
            <li className="nav-text list-group-item bg-secondary text-light border-0">users</li>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary border-top-0" + isActive('/users')} to="/users">Edit</Link>
            <Link class={"list-group-item list-group-item-action list-group-item-secondary border-bottom-0 rounded-0" + isActive('/staff-picks')} to="staff-picks">Staff Picks</Link>
            
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