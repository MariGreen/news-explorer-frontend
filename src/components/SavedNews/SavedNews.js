import React from 'react';
import PropTypes from 'prop-types';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import News from '../NewsCard/NewsCard';
import './SavedNews.css';

function SavedNews(props) {


  return (
    <div className="content" >
      <SavedNewsHeader articles={props.articles} />
      <section className="result">
        <div className="result__articles">
          <div className="result__show-results">
            {props.articles.map((newsCard) => {
              return (
                <News newsCard={newsCard} myPath={props.myPath} isLoggedIn={props.isLoggedIn} key={newsCard._id} onTrashClick={props.onTrashClick}
                />
              )
            })
            }
          </div>
        </div>
      </section>
    </div>
  );

}

SavedNews.propTypes = {
  myPath: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  articles: PropTypes.array,
  onTrashClick: PropTypes.func.isRequired,
  onRouteClick: PropTypes.func,
}

export default SavedNews;