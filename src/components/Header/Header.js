import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Navbar from '../NavBar/NavBar';
// import ProtectedRoute from './ProtectedRoute';
import './Header.css';

function Header(props) {
  return (
    <header className='header'>
      <Link to='/' className='header__title header__title_invert'>NewsExplorer</Link>
      <Navbar loggedIn={props.loggedIn} userName={props.userName} onLoginClick={props.onLoginClick} onSignOut={props.onSignOut} myPath={props.myPath} />
      <button type="button" className="header__menu-button" onClick={props.onMenuOpen}></button>
    </header>
  )
}
export default Header;