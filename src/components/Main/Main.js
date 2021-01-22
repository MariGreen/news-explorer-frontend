import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import { LoadingContext } from '../../context/LoadingContext';
// import { CurrentUserContext } from '../../context/CurrentUserContext';
import News from '../NewsCard/NewsCard';
import './Main.css';


function Main(props) {

  const isLoading = React.useContext(LoadingContext);
  // const currentUser = useContext(CurrentUserContext);

  const { news } = props;
  const [numberOfNews, setNumberOfNews] = useState(3);

  function onShowMore() {
    setNumberOfNews(numberOfNews + 3);
  }

  useEffect(() => {
    setNumberOfNews(3);
  }, [news]);

  return (
    <div className="content">
      {isLoading && <Preloader />}
      <section className="result">
        <div className="result__articles">
          <h2 className="result__title"> Результаты поиска</h2>
          <div className="result__show-results">
            {
              news.slice(0, numberOfNews).map((newsCard, index) => {
                return (
                  <News newsCard={newsCard} myPath={props.myPath} isLoggedIn={props.isLoggedIn} key={index} onSaveClick={props.onSaveClick}
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
    </div>
  );
}

Main.propTypes = {
  myPath: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

export default Main;