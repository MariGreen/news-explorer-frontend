import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPopup.css';

function MenuPopup(props) {


  return (
    <div className={`popup popup_menu ${props.isOpen && 'popup_opened'}`}>
      <button type="button" className="popup__close-button" onClick={props.onClose}></button>
      <nav className="header__nav header__nav_mobile">
        <ul>
          <li className="header__item header__item_mobile"><Link to='/' className='header__link' >Главная</Link></li>
          <li className="header__item header__item_mobile"><Link className='header__link' to='/saved-news'>Сохранённые статьи</Link></li>
          <li className="header__item header__item_mobile"><button type="button" className="header__button header__button_mobile" onClick={props.onAuthClick}>Авторизоваться</button></li>
        </ul>


      </nav>
      {props.children}

    </div>
  )
}

export default MenuPopup;