import React from 'react';
import PropTypes from 'prop-types';
import './PopupWithForm.css';

function PopupWithForm(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit();
  }

  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <form
        name={props.name}
        action="#"
        // method="POST"
        className="popup__form-container"
        noValidate
        onSubmit={handleSubmit}
      // onSubmit={props.onClose}
      >
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
      </form>
    </div>
  );
}

PopupWithForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default PopupWithForm;