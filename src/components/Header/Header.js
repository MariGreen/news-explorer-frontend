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


      {/* <Switch>
        <ProtectedRoute exact path='/' component={Navbar} loggedIn={props.loggedIn} buttonText='Выйти' buttonLink='' email={props.email} onSignOut={props.onSignOut} />

        <Route path='/sign-in' >
          <Navbar loggedIn={props.loggedIn} buttonText='Регистрация' buttonLink='/sign-up' email={props.email} onSignOut={props.onSignOut} />
        </Route>

        <Route path='/sign-up' >
          <Navbar loggedIn={props.loggedIn} buttonText='Войти' buttonLink='/sign-in' email={props.email} onSignOut={props.onSignOut} />
        </Route>
        <p className='header__link'>Войти</p>
      </Switch> */}
    </header>
  )
}
export default Header;