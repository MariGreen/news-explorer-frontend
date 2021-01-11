import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';
import logOutDark from '../../images/navbar_logout.svg';
import logOutWhite from '../../images/navbar_logout_white.svg';


const NavBar = (props) => {

  const history = useHistory();

  const isMain = props.myPath.pathname === '/';
  const headerItemClassName = `${isMain ? 'header__item header__item_underline-light header__item_light' : 'header__item header__item_dark'}`;
  const headerLinkClassName = `${isMain ? 'header__link header__link_light' : 'header__link header__link_dark'}`;
  const headerLinkClassNameInvert = `${!isMain ? 'header__item header__item_dark header__item_underline' : 'header__item header__item_light'}`
  const headerItemUserClassName = `header__item ${isMain ? 'header__item_light' : 'header__item_dark'}`;
  const headerButtonUserClassName = `header__button ${isMain ? 'header__button_light' : 'header__button_dark'}`;

  function signOut() {
    if (props.loggedIn) {
      props.onSignOut();
      // localStorage.removeItem('jwt');
      history.push('/');
    }
  }


  return (
    <nav className='header__navbar'>
      <ul className='header__nav' >
        <li className={headerItemClassName}> <Link to='/' className={headerLinkClassName} >Главная</Link></li>
        {props.loggedIn ? <li className={headerLinkClassNameInvert}><Link className={headerLinkClassName} to='/saved-news'>Сохранённые статьи</Link></li> : null}

        {props.loggedIn ? <li className={headerItemUserClassName}><button className={headerButtonUserClassName} onClick={signOut}>{props.userName} <img className='header__logout' src={isMain ? logOutWhite : logOutDark} alt='Выйти' /></button></li> : <li className={headerItemUserClassName}><button className={headerButtonUserClassName} onClick={props.onLoginClick}> Авторизоваться </button></li>}

      </ul>

    </nav>
  )
}

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  userName: PropTypes.string,
}

export default NavBar;