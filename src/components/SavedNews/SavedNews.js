import React from 'react';
import { savedNews } from '../../constants/savedNews';
import News from '../NewsCard/NewsCard';
import './SavedNews.css';

function SavedNews(props) {

  const isSaved = true;
  const isFound = false;

  return (
    <div className="content">
      <section className="result">
        <div className="result__articles">
          <div className="result__show-results">
            {savedNews.map((newsCard) => {
              return (
                <News newsCard={newsCard} isSaved={isSaved} isFound={isFound} myPath={props.myPath}
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