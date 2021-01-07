import React, { useState } from 'react';
// import Loader from './Loader';
import News from '../NewsCard/NewsCard'
import { news } from '../../constants/cards';
import './Main.css';


function Main(props) {
  /* const currentUser = React.useContext(CurrentUserContext);
  const initialLoading = React.useContext(InitialLoadingContext);   */

  // const { news } = props; 
  const [numberOfNews, setNumberOfNews] = useState(3);

  function onShowMore() {
    setNumberOfNews(numberOfNews + 3);
  }

  return (
    <div className="content">
      <section className="result">
        <div className="result__articles">
          <h2 className="result__title"> Результаты поиска</h2>
          <div className="result__show-results">
            {
              news.slice(0, numberOfNews).map((newsCard) => {
                return (
                  <News newsCard={newsCard} myPath={props.myPath} isLoggedIn={props.isLoggedIn}
                  />
                )
              })
            }
          </div>
          {(news.length > numberOfNews) && <button
            type="button"
            aria-label="показать больше результатов"
            className="result__show-button"
            onClick={onShowMore}
          >Показать еще</button>}
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