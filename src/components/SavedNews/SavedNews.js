import React, { useContext } from 'react';
// import { savedNews } from '../../constants/savedNews';
import PropTypes from 'prop-types';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import Preloader from '../Preloader/Preloader';
// import { InitialLoadingContext } from '../../context/InitialLoadingContext';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import News from '../NewsCard/NewsCard';
import './SavedNews.css';

function SavedNews(props) {
  // const initialLoading = React.useContext(InitialLoadingContext);
  // const currentUser = useContext(CurrentUserContext);
  // const { articles, onTrashClick } = props;

  return (

    <div className="content" >
      <SavedNewsHeader isLoggedIn={props.loggedIn} />
      <section className="result">
        {/* {initialLoading && <Preloader />} */}
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
}

export default SavedNews;