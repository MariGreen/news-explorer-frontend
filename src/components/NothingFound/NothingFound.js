import React from 'react';
import PropTypes from 'prop-types';
import './NothingFound.css';
import sadFace from '../../images/result_not-found.svg';

function NothingFound(props) {

  return (
    <div className="result__nothing-found">
      <img src={sadFace} alt="Грустная рожица" className="result__sad-face" />
      <h3 className="result__subtitle">Ничего не найдено</h3>
      <p className="result__not-found-text">{props.isError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' : (props.isNoKeyword ? 'Нужно ввести ключевое слово.' : 'К сожалению, по вашему запросу ничего не найдено.')}</p>
    </div>

  )
}

NothingFound.propTypes = {
  isError: PropTypes.bool.isRequired,
  isNoKeyword: PropTypes.bool.isRequired,
}

export default NothingFound;