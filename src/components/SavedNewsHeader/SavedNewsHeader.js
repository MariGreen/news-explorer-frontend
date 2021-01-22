import React, { useContext } from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleMap(elem) {
    return elem.keyword;
  }

  const keywords = props.articles.map(handleMap);
  console.log(keywords);

  const popularity = keywords.reduce(function (acc, elem) {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});
  console.log(popularity);

  const words = Object.entries(popularity).map((elem) => ({
    key: elem[0],
    quantity: elem[1],
  }));

  const sortedWords = words.sort(function (a, b) {
    return b.quantity - a.quantity
  })
  console.log(sortedWords);

  const mostPopularWords = sortedWords.map((elem) => elem.key);
  console.log(mostPopularWords);

  const finishInfo = mostPopularWords.slice(0, 2).join(", ");
  const finishQuantity = mostPopularWords.length - 2;


  return (
    <section className="saved-news">
      <h3 className="saved-news__text saved-news__text_subtitle">Сохранённые статьи</h3>
      <h2 className="saved-news__title">{currentUser.name}, у&nbsp;вас {props.articles.length}&nbsp;сохранённых статей</h2>
      <p className="saved-news__text">По ключевым словам: <span className="saved-news__text saved-news__text_bold">{finishInfo}</span> и <span className="saved-news__text saved-news__text_bold" >{finishQuantity}-м другим</span></p>
    </section>

  )

}

export default SavedNewsHeader;