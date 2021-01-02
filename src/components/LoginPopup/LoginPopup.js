import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import '../LoginPopup/LoginPopup.css';
// import { LoadingContext } from '../contexts/LoadingContext';

function LoginPopup(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const loading = React.useContext(LoadingContext);

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
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
  }, [props.isOpen]);

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
      </fieldset>

      <button type="submit" className="popup__save-button">
        {/* {loading ? `Сохранение...` : `Создать`} */} Войти
      </button>
      <div className='auth__signup'>
        <p className='auth__form-item'>или Зарегистрироваться</p>
        {/* <Link to='/sign-up' className='auth__form-item auth__form-item_link'>Регистрация</Link> */}
      </div>
    </PopupWithForm>
  );
}

export default LoginPopup;


