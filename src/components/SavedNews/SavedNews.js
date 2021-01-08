import React from 'react';
import { savedNews } from '../../constants/savedNews';
import News from '../NewsCard/NewsCard';
import './SavedNews.css';

function SavedNews(props) {



  return (
    <div className="content">
      <section className="result">
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

      {/* {initialLoading && <Loader />} */}


    </div>
  );

}

export default SavedNews;