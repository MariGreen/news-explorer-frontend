import React from 'react';
/* import Card from './Card';
import Loader from './Loader'; */
import { news } from '../../constants/cards';
import picture from '../../images/cards_image_08.jpg'
import './Main.css';
import '../NewsCard/NewsCard.css';

function Main(props) {
  /* const currentUser = React.useContext(CurrentUserContext);
  const initialLoading = React.useContext(InitialLoadingContext);   */

  // const { news } = props;

  // function handleTrashClick() {
  //   props.onTrashClick(props.news);
  // }

  // function handleAdviceClick() {
  //   props.onTrashClick(props.news);
  // }

  function handleTrashClick() {
    props.onTrashClick(news);
  }

  function handleHintClick() {
    props.onHintClick(news);
  }

  const isSaved = true;

  return (
    <div className="content">
      <section className="result">
        <div className="result__articles">
          <h2 className="result__title"> Результаты поиска</h2>
          <div className="result__show-results">
            <div className="result__cards-imitation"></div>
            {/* // */}
            <div className="news-card">
              <div className="news-card__header">
                {isSaved && <button type="submit" className="news-card__key-word" >Природа</button>}
                {isSaved && <button type="submit" className="news-card__hint" onClick={handleHintClick}>Убрать из сохранённых</button>}
                {isSaved && <button type="submit" className="news-card__trash" onClick={handleTrashClick}></button>}
              </div>
              <img alt={news.title} className="news-card__picture" src={picture}
              // src={news.urlToImage}
              />
              <div className="news-card__data">
                <p className="news-card__date"> 1 января, 2021
                  {/* {news.publishedAt} */}
                </p>
                <h3 className="news-card__title">Национальное достояние&nbsp;&mdash; парки
                {/* {news.title} */}
                </h3>
                <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков&nbsp;&mdash; охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                {/* {news.desctiption} */}
              </div>
              <h4 className="news-card__source">Дзен
                {/* {news.source} */}
              </h4>
            </div>
            {/* // */}
            <div className="result__cards-imitation"></div>
            <div className="result__cards-imitation"></div>
            <div className="result__cards-imitation"></div>
            <div className="result__cards-imitation"></div>
            <div className="result__cards-imitation"></div>
          </div>
          <button
            type="button"
            aria-label="показать больше результатов"
            className="result__show-button"
          // onClick={props.onAddPlace}
          >Показать еще</button>
        </div>
      </section>

      {/* {initialLoading && <Loader />} */}

      {/* <section className="elements" aria-label="секция с фотографиями">
        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              onTrashClick={props.onTrashClick}
              onCardLike={props.onCardLike}
            />
          );
        })}
      </section> */}
    </div>
  );
}

export default Main;