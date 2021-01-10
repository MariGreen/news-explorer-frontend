import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import '../LoginPopup/LoginPopup.css';
// import { LoadingContext } from '../contexts/LoadingContext';

function LoginPopup(props) {
  React.useEffect(() => {
    setFormValues({
      email: "",
      password: ""
    });
  }, [props.isOpen]);


  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const [formValidity, setFormValidity] = useState({
    emailValid: false,
    passwordValid: false
  });

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setFormValues]
  );

  useEffect(
    function validateInputs() {
      const isEmailFilled = formValues.email.length > 5;
      const isEmailValid = isEmailFilled;

      const isPasswordFilled = formValues.password.length > 0;
      const isPasswordValid = isPasswordFilled;

      setFormValidity((prevValidity) => ({
        emailValid: isEmailValid,
        passwordValid: isPasswordValid
      }));
    },
    [formValues, setFormValidity]
  );

  const { email, password } = formValues;
  const { emailValid, passwordValid } = formValidity;
  const isSubmitDisabled = !emailValid || !passwordValid;


  return (
    <PopupWithForm
      name="login"
      title="Вход"
      isOpen={props.isOpen}
      onClose={props.onClose}
    // onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-item">
        <div className="popup__form-element">
          <label htmlFor="email" className="popup__form-element-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="popup__form-item-field popup__form-item-field_email"
            placeholder="Введите почту"
            value={email || ''}
            onChange={handleInputChange}
            minLength="5"
            maxLength="30"
            autoComplete="off"
            required
          />
          {!emailValid && <span id="email-input-error" className="popup__form-item popup__form-item_error">Неправильный формат email</span>}
        </div>

        <div className="popup__form-element">
          <label htmlFor="password" className="popup__form-element-label">Пароль</label>
          <input
            id="password"
            type="password"
            name="password"
            className="popup__form-item-field popup__form-item-field_password"
            placeholder="Введите пароль"
            value={password || ''}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          {!passwordValid && <span id="password-input-error" className="popup__form-item popup__form-item_error">Неправильный формат password</span>}
        </div>
      </fieldset>

      <button type="submit" className="popup__save-button" disabled={isSubmitDisabled}>
        {/* {loading ? `Вход...` : `Войти`} */} Войти
      </button>
      <div className='popup__toggle'>
        <p className='popup__toggle-item'>или <span className='popup__toggle-item popup__toggle-item_link' onClick={props.onRegisterClick}>Зарегистрироваться</span></p>
      </div>
    </PopupWithForm>
  );
}

LoginPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LoginPopup;


