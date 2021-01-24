import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './ResultPopup.css';



function ResultPopup(props) {

  return (
    <PopupWithForm
      name="result"
      title="Пользователь успешно зарегистрирован!"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className="popup__info">
        <span className="popup__link" onClick={props.onResultClick}>Войти</span>
      </div>
    </PopupWithForm>
  );
}

ResultPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onResultClick: PropTypes.func.isRequired
}

export default ResultPopup;