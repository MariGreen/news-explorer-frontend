import React from 'react';
/* import Card from './Card';
import Loader from './Loader'; */
import './Main.css';
import '../NewsCard/NewsCard.css';

function Main(props) {
  /* const currentUser = React.useContext(CurrentUserContext);
  const initialLoading = React.useContext(InitialLoadingContext);   */

  const { news } = props;

  function handleTrashClick() {
    props.onTrashClick(props.news);
  }

  function handleAdviceClick() {
    props.onTrashClick(props.news);
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
              <img alt={news.name} className="news-card__picture" src={news.link} />
              <div className="news-card__data">
                <div className="news-card__header">
                  {isSaved && <button type="submit" className="news-card__key-word" >Природа</button>}
                  {isSaved && <button type="submit" className="news-card__hint" onClick={handleAdviceClick}>Убрать из сохранеённых</button>}
                  {isSaved && <button type="submit" className="news-card__trash" onClick={handleTrashClick}></button>}
                </div>
                <p className="news-card__date">{news.publishAt}</p>

              </div>
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