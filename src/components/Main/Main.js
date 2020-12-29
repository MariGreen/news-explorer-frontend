import React from 'react';
/* import Card from './Card';
import Loader from './Loader'; */
import './Main.css';

function Main(props) {
  /* const currentUser = React.useContext(CurrentUserContext);
  const initialLoading = React.useContext(InitialLoadingContext);   */

  return (
    <div className="content">
      <section className="result">
        <div className="result__articles">
          <h2 className="result__title"> Результаты поиска</h2>
          <div className="result__show-results">
            <div className="result__cards-imitation"></div>
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
          ></button>
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