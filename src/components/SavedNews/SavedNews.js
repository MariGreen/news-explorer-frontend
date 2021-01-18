import React from 'react';
import { savedNews } from '../../constants/savedNews';
import PropTypes from 'prop-types';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import Preloader from '../Preloader/Preloader';
// import { InitialLoadingContext } from '../../context/InitialLoadingContext';
import News from '../NewsCard/NewsCard';
import './SavedNews.css';

function SavedNews(props) {
  // const initialLoading = React.useContext(InitialLoadingContext);


  return (

    <div className="content" >
      <SavedNewsHeader isLoggedIn={props.loggedIn} />
      <section className="result">
        {/* {initialLoading && <Preloader />} */}
        <div className="result__articles">
          <div className="result__show-results">
            {savedNews.map((newsCard) => {
              return (
                <News newsCard={newsCard} myPath={props.myPath} isLoggedIn={props.isLoggedIn} key={newsCard._id}
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