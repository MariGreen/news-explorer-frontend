import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <form
        name={props.name}
        action="#"
        // method="POST"
        className="popup__form-container"
        noValidate
        // onSubmit={props.onSubmit}
        onSubmit={props.onClose}
      >
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
      </form>
    </div>
  );
}

export default PopupWithForm;