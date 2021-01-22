import React, { useContext } from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleMap(elem) {
    return elem.keyword;
  }

  const keywords = props.articles.map(handleMap);
  console.log(keywords);// 'массив слов'

  const popularity = keywords.reduce(function (acc, elem) {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});
  console.log(popularity);// 'массив слов c количеством'

  const words = Object.entries(popularity).map((elem) => ({
    key: elem[0],
    quantity: elem[1],
  }));

  const sortedWords = words.sort(function (a, b) {
    return b.quantity - a.quantity
  })
  console.log(sortedWords);//массив объектов: сортированные слова + количество

  const mostPopularWords = sortedWords.map((elem) => elem.key);//слова с количеством
  console.log(mostPopularWords);//массив слов, отсортированный по частоте

  const finishQuantity = mostPopularWords.length - 2;

  const finishInfo = mostPopularWords.length <= 3 ? mostPopularWords.join(", ") : `${mostPopularWords.slice(0, 2).join(", ")}`

  function toFixCase(str) {
    if (str) return str[0].toUpperCase() + str.substr(1).toLowerCase();
  }
  console.log(toFixCase('555'));

  function setArticlesQuantity(item) {
    let finishArticlesInfo;
    if (item % 100 >= 5 && item % 100 <= 20) {
      finishArticlesInfo = 'сохранённых статей'
      return finishArticlesInfo;
    } else if (item % 10 === 1) {
      finishArticlesInfo = 'сохранённая статья';
      return finishArticlesInfo;
    } else if (item % 10 >= 2 && item % 10 <= 4) {
      finishArticlesInfo = 'сохранённые статьи';
      return finishArticlesInfo;
    } else {
      finishArticlesInfo = 'сохранённых статей';
      return finishArticlesInfo;
    }
  }

  function setQuantity(item) {
    let quantityWordsInfo;
    if (item % 100 >= 9 && item % 100 <= 20) {
      quantityWordsInfo = item + '-ти другим';
      return quantityWordsInfo;
    } else if (item % 10 === 1) {
      quantityWordsInfo = item + '-му другому';
      return quantityWordsInfo;
    } else if (item % 10 >= 2 && item % 10 <= 4) {
      quantityWordsInfo = item + '-м другим';
      return quantityWordsInfo;
    } else {
      quantityWordsInfo = item + '-ми другим';
      return quantityWordsInfo;
    }
  }


  return (
    <section className="saved-news">
      <h3 className="saved-news__text saved-news__text_subtitle">Сохранённые статьи</h3>
      <h2 className="saved-news__title">{currentUser.name}, у&nbsp;вас {props.articles.length > 0 ? props.articles.length : 'нет'}&nbsp;{setArticlesQuantity(props.articles.length)}</h2>
      {props.articles.length > 0 &&
        <p className="saved-news__text">По ключевым словам: <span className="saved-news__text saved-news__text_bold">{finishInfo}</span> {finishQuantity > 1 && <span> и <span className="saved-news__text saved-news__text_bold" >{setQuantity(finishQuantity)}</span></span>}</p>}
    </section>

  )

}

export default SavedNewsHeader;