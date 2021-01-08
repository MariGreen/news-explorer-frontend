import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPopup.css';

function MenuPopup(props) {

  return (
    <div className={`popup popup_menu ${props.isOpen && 'popup_opened'}`}>

      <div className="header__mobile-container">
        <button type="button" className="popup__close-mobile" onClick={props.onClose}></button>
        <nav className="header__nav-mobile-container">
          <ul className="header__nav-mobile">
            <li className="header__item-mobile"><Link to='/' className='header__link' >Главная</Link></li>
            <li className="header__item-mobile"><Link className='header__link' to='/saved-news'>Сохранённые статьи</Link></li>
            <li className="header__item-mobile"><button type="button" className="header__button header__button_mobile" onClick={props.onAuthClick}>Авторизоваться</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuPopup;