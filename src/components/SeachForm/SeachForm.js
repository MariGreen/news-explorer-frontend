import React from 'react';
import './SeachForm.css';

function SeachForm(params) {
  return (
    <div className="seach-form">
      <div className="seach-form__text">
        <h1 className="seach-form__title">Что творится в мире?</h1>
        <p className="seach-form__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</p>
        <div className="seach-form__item">
          <input className="seach-form__input-field" type="text" placeholder="Введите тему новости" />
          <button className="seach-form__submit" type="button" aria-label="найти новости">Искать</button>
        </div>
      </div>

    </div>

  )

}

export default SeachForm;