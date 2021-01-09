import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './RegisterPopup.css';

function RegisterPopup(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  // const loading = React.useContext(LoadingContext);

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   props.onLogin({
  //     name,
  //     link,
  //   });
  // }

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setName('');
  }, [props.isOpen]);

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
            onChange={handleChangeEmail}
            minLength="5"
            maxLength="30"
            autoComplete="off"
            required
          />
          <span id="email-input-error" className="popup__form-item popup__form-item_error">Ошибка</span>
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
            onChange={handleChangePassword}
            autoComplete="off"
            required
          />
          <span id="password-input-error" className="popup__form-item popup__form-item_error">Ошибка</span>
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
              onChange={handleChangeName}
              autoComplete="off"
              required
            />
          </label>
          <span id="name-input-error" className="popup__form-item popup__form-item_error">Ошибка</span>
        </div>


      </fieldset>
      <span id="user-input-error" className="popup__form-item popup__form-item_error-user">Такой пользователь уже есть</span>


      <button type="submit" className="popup__save-button">
        {/* {loading ? `Сохранение...` : `Создать`} */} Зарегистрироваться
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


