import React from 'react';
import PropTypes from 'prop-types';
import './PopupWithForm.css';

function PopupWithForm(props) {

  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <form
        name={props.name}
        action="#"
        className="popup__form-container"
        noValidate
        onSubmit={props.onSubmit}
      >
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
      </form>
    </div>
  );
}

PopupWithForm.propTypes = {
  onSubmit: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default PopupWithForm;