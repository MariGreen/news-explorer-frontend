import React from 'react';
import './NothingNotFound.css';
import sadFace from '../../images/result_not-found.svg';

function NothingNotFound() {

  return (
    <div className="result__nothing-found">
      <img src={sadFace} alt="Грустная рожица" className="result__sad-face" />
      <h3 className="result__subtitle">Ничего не найдено</h3>
      <p className="result__not-found-text">К сожалению, по вашему запросу ничего не найдено</p>
    </div>

  )

}

export default NothingNotFound;