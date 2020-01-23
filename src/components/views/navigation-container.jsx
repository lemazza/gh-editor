import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserStatusView from './user-status-view';

import './navigation-container.css';

export default function NavigationContainer(props) {
  const location = useLocation();
  console.log(location);

  function isActive(route) {
    return route === location.pathname ? ' active' : '';
  }

  return (
    <div className="">
      <header>
        <nav className="navbar sticky-top navbar-collapse-md navbar-light bg-light">
          <button
            className="navbar-toggler mr-auto d-md-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand d-none d-md-block">
            GameHaus Editor
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/games"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Games
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/games">
                    Edit Games
                  </Link>
                  <Link className="dropdown-item" to="/quality-control">
                    Quality Control
                  </Link>
                  <Link className="dropdown-item" to="/remove-games">
                    Remove
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/click-log">
                    Click Log
                  </Link>
                  <Link className="dropdown-item" to="/shelves">
                    Shelves
                  </Link>
                  <Link className="dropdown-item" to="/office">
                    Office
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/staff-picks">
                  Staff Picks
                </Link>
              </li>
            </ul>
          </div>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>

      <div className="row">
        <div
          id="sidebar-container"
          className="sidebar-expanded d-none d-md-block col-2 bg-secondary p-0 min-vh-100 sandstone"
        >
          <ul className="list-group">
            <li className="list-separator nav-text list-group-item bg-secondary text-light border-0 align-right" />
            <Link
              className={
                'list-group-item  list-group-item-action list-group-item-secondary border-top-0' + isActive('/games')
              }
              to="/games"
            >
              Games
            </Link>
            <Link
              className={
                'list-group-item list-group-item-action list-group-item-secondary' + isActive('/quality-control')
              }
              to="/quality-control"
            >
              Q.C.
            </Link>
            <Link
              className={'list-group-item list-group-item-action list-group-item-secondary' + isActive('/remove-games')}
              to="/remove-games"
            >
              Remove
            </Link>
            <Link
              className={'list-group-item list-group-item-action list-group-item-secondary' + isActive('/click-log')}
              to="click-log"
            >
              Click Log
            </Link>
            <Link
              className={'list-group-item list-group-item-action list-group-item-secondary' + isActive('/shelves')}
              to="shelves"
            >
              Shelves
            </Link>
            <Link
              className={
                'list-group-item list-group-item-action list-group-item-secondary border-bottom-0 ' +
                isActive('/office')
              }
              to="/office"
            >
              Office
            </Link>
            <li className="list-separator nav-text list-group-item bg-secondary text-light border-0"></li>
            <Link
              className={
                'list-group-item list-group-item-action list-group-item-secondary border-top-0' + isActive('/users')
              }
              to="/users"
            >
              Users
            </Link>
            <Link
              className={
                'list-group-item list-group-item-action list-group-item-secondary border-bottom-0 rounded-0' +
                isActive('/staff-picks')
              }
              to="/staff-picks"
            >
              Staff Picks
            </Link>

            <li className="nav-text list-group-item bg-secondary text-light border-0">
              <UserStatusView className="navbar-text" setLoggedIn={props.setLoggedIn} />
            </li>
          </ul>
        </div>

        <div className="col">{props.children}</div>
      </div>
    </div>
  );
}
