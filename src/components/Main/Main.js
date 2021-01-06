import React from 'react';
// import Loader from './Loader';
import News from '../NewsCard/NewsCard'
import { news } from '../../constants/cards';
import './Main.css';


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

  // function handleTrashClick() {
  //   props.onTrashClick(news);
  // }

  // function handleHintClick() {
  //   props.onHintClick(news);
  // }

  const isSaved = false;
  const isFound = true;

  return (
    <div className="content">
      <section className="result">
        <div className="result__articles">
          <h2 className="result__title"> Результаты поиска</h2>
          <div className="result__show-results">
            {news.map((newsCard) => {
              return (
                <News newsCard={newsCard} isSaved={isSaved} isFound={isFound} myPath={props.myPath}
                />
              )
            })
            }
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