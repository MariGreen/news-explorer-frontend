import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './RegisterPopup.css';

function RegisterPopup(props) {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [name, setName] = React.useState('');
  // // const loading = React.useContext(LoadingContext);

  // function handleChangeEmail(evt) {
  //   setEmail(evt.target.value);
  // }

  // function handleChangePassword(evt) {
  //   setPassword(evt.target.value);
  // }

  // function handleChangeName(evt) {
  //   setName(evt.target.value);
  // }

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   props.onLogin({
  //     name,
  //     link,
  //   });
  // }

  React.useEffect(() => {
    setFormValues({
      email: "",
      password: "",
      name: ""
    });
  }, [props.isOpen]);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: ""
  });

  const [formValidity, setFormValidity] = useState({
    emailValid: false,
    passwordValid: false,
    nameValid: false
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

      const isNameFilled = formValues.name.length > 1;
      const isNameValid = isNameFilled;

      setFormValidity((prevValidity) => ({
        emailValid: isEmailValid,
        passwordValid: isPasswordValid,
        nameValid: isNameValid,
      }));
    },
    [formValues, setFormValidity]
  );

  const { email, password, name } = formValues;
  const { emailValid, passwordValid, nameValid } = formValidity;
  const isSubmitDisabled = !emailValid || !passwordValid || !nameValid;

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      isOpen={props.isOpen}
      onClose={props.onClose}
    // onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-item">
        <div className="popup__form-element">
          <label htmlFor="email-input" className="popup__form-element-label">Email</label>
          <input
            id="email-input"
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
          <label htmlFor="password-input" className="popup__form-element-label">Пароль</label>
          <input
            id="password-input"
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
        <div className="popup__form-element">
          <label htmlFor="name-input" className="popup__form-element-label">Имя
          <input
              id="name-input"
              type="text"
              name="name"
              className="popup__form-item-field popup__form-item-field_name"
              placeholder="Введите своё имя"
              value={name || ''}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </label>
          {!nameValid && <span id="name-input-error" className="popup__form-item popup__form-item_error">Неправильный формат name</span>}
        </div>


      </fieldset>
      <span id="user-input-error" className="popup__form-item popup__form-item_error-user">Такой пользователь уже есть</span>


      <button type="submit" className="popup__save-button" disabled={isSubmitDisabled}>
        {/* {loading ? `Регистрация...` : `Зарегистрироваться`} */} Зарегистрироваться
      </button>
      <div className='popup__toggle'>
        <p className='popup__toggle-item'>или <span className='popup__toggle-item popup__toggle-item_link' onClick={props.onLoginClick}>Войти </span></p>
      </div>
    </PopupWithForm>
  );
}

RegisterPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default RegisterPopup;


