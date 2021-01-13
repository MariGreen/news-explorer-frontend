import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPopup.css';

function MenuPopup(props) {

  return (
    <div className={`popup popup_menu ${props.isOpen && 'popup_opened'}`}>
      <nav className="header__nav-mobile-container">
        <ul className="header__nav-mobile">
          <li className="header__item-mobile"><Link to='/' className='header__link header__link_menu' >Главная</Link></li>
          <li className="header__item-mobile"><Link className='header__link header__link_menu' to='/saved-news'>Сохранённые статьи</Link></li>
          <li className="header__item-mobile"><button type="button" className="header__button header__button_mobile" onClick={props.onAuthClick}>Авторизоваться</button></li>
        </ul>
      </nav>
    </div>

  )
}

export default MenuPopup;