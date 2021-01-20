import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import timeConverter from '../../utils/timeConverter';
import './NewsCard.css';
import HoverHint from '../HoverHint/HoverHint';

function News(props) {
  const { newsCard, myPath, isLoggedIn, onTrashClick, onSaveClick } = props;
  const [isHoverHintVisible, setIsHoverHintVisible] = React.useState(false)
  const [isMarked, setIsMarked] = React.useState(false);
  const isMain = (myPath.pathname === '/') ? true : false;
  const bookmarkClassName = `news-card__icon news-card__icon_mark ${isMarked ? 'news-card__icon_marked' : ''}`;

  const publishDate = new Date(newsCard.publishedAt);
  const date = publishDate.toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
  });
  const time = date + ', ' + publishDate.getFullYear();

  function handleTrashClick() {
    onTrashClick(newsCard);
  }

  function handleClick() {
    if (isLoggedIn) {
      setIsMarked(!isMarked);
      onSaveClick(newsCard);
    }
  }

  function handleMouseToggle() {
    setIsHoverHintVisible(!isHoverHintVisible);
  }



  return (
    <div className="news-card" >
      <div className="news-card__header">
        {!isMain && <button type="submit" className="news-card__key-word" >{newsCard.keyword}</button>}
        {isHoverHintVisible && !(isMain && isLoggedIn) && <HoverHint myPath={myPath} />}
        {!isMain && <button type="submit" className="news-card__icon news-card__icon_trash"
          onClick={handleTrashClick}
          onMouseEnter={handleMouseToggle}
          onMouseLeave={handleMouseToggle}
        // disabled={loading}
        ></button>}
        {isMain && <button type="submit" className={bookmarkClassName} onClick={handleClick} onMouseEnter={handleMouseToggle} onMouseLeave={handleMouseToggle} ></button>}
      </div>
      <a href={newsCard.url} target='_blank' rel="noreferrer" className="news-card__link news-card__link_black">
        <div>
          <img alt={newsCard.title} className="news-card__picture" src={newsCard.urlToImage}
          />
          <div className="news-card__data">
            <p className="news-card__date">{time}</p>
            <h3 className="news-card__title news-card__link_black">{newsCard.title}</h3>
            <p className="news-card__text news-card__link_black">{newsCard.description}</p>
          </div>
          <h4 className="news-card__source">{newsCard.source.name}</h4>
        </div>
      </a>
    </div >
  )
}

News.propTypes = {
  loggedIn: PropTypes.bool,
  News: PropTypes.node,
  myPath: PropTypes.object,
}

export default News;