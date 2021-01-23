import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import PropTypes from 'prop-types';
import './MenuPopup.css';
import logOutWhite from '../../images/navbar_logout_white.svg';

function MenuPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();

  function signOut() {
    if (props.loggedIn) {
      props.onSignOut();
      localStorage.removeItem('jwt');
      history.push('/');
    }
  }

  return (
    <div className={`popup popup_menu ${props.isOpen && 'popup_opened'}`}>
      <nav className="header__nav-mobile-container">
        <ul className="header__nav-mobile">
          <li className="header__item-mobile"><Link to='/' className='header__link header__link_menu' >Главная</Link></li>
          <li className="header__item-mobile"><Link className='header__link header__link_menu' to='/saved-news'>Сохранённые статьи</Link></li>
          {!props.loggedIn && <li className="header__item-mobile"><button type="button" className="header__button header__button_mobile" onClick={props.onAuthClick}>Авторизоваться</button></li>}
          {props.loggedIn && <li className="header__item-mobile"><button type="button" className="header__button header__button_mobile" onClick={signOut}>{currentUser.name}<img src={logOutWhite} alt='Выйти' className='header__logout' /></button></li>}
        </ul>
      </nav>
    </div>

  )
}

MenuPopup.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onSignOut: PropTypes.func.isRequired,
  usermyPath: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onAuthClick: PropTypes.func.isRequired,
}

export default MenuPopup;