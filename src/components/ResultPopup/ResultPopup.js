import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './ResultPopup.css';



function ResultPopup(props) {
  // function handleSubmit(evt) {
  //   evt.preventDefault();

  // }

  return (
    <PopupWithForm
      name="result"
      title="Пользователь успешно зарегистрирован!"
      isOpen={props.isOpen}
      onClose={props.onClose}
    // onSubmit={handleSubmit}
    >
      <div className="popup__info">
        <p className="popup__link">Войти</p>
      </div>
    </PopupWithForm>
  );
}

ResultPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ResultPopup;