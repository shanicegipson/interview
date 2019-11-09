import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => (
  <div className="nav">
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.store.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the secret page and the logout button if the user is logged in */}
      {props.store.user.id && (
        <>
          <Link className="nav-link" to="/admin">
            Secret Page
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
    </div>
  </div>
);

export default connect(mapStoreToProps)(Nav);