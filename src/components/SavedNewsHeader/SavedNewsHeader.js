import React, { useContext } from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="saved-news">
      <h3 className="saved-news__text saved-news__text_subtitle">Сохранённые статьи</h3>
      <h2 className="saved-news__title">{currentUser.name}, у&nbsp;вас {props.articles.length}&nbsp;сохранённых статей</h2>
      <p className="saved-news__text">По ключевым словам: <span className="saved-news__text saved-news__text_bold">Природа, Тайга</span> и <span className="saved-news__text saved-news__text_bold" >2-м другим</span></p>
    </section>

  )

}

export default SavedNewsHeader;