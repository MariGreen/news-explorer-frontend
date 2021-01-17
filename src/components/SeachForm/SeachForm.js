import React, { useState, useContext } from 'react';
import { PreloaderContext } from '../../context/PreloaderContext';
import './SeachForm.css';

function SeachForm(props) {
  const [keyWord, setKeyWord] = useState('');
  const loading = useContext(PreloaderContext);

  function handeleInput(evt) {
    setKeyWord(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearch(keyWord);
  }

  return (
    <form className="seach-form" onSubmit={handleSubmit}>
      <div className="seach-form__item">
        <h1 className="seach-form__title">Что творится в мире?</h1>
        <p className="seach-form__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</p>
        <input className="seach-form__input-field" type="text" placeholder="Введите тему новости" required onChange={handeleInput} />
        <button className="seach-form__submit" type="submit" aria-label="найти новости">{loading ? `Ищем...` : `Искать`}</button>
      </div>

    </form>

  )

}

export default SeachForm;