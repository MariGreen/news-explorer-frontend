import React from 'react';
import './NewsCard.css';
import HoverHint from '../HoverHint/HoverHint';

function News(props) {
  const { newsCard, myPath, isLoggedIn } = props;
  const [isHoverHintVisible, setIsHoverHintVisible] = React.useState(false)
  const [isMarked, setIsMarked] = React.useState(false);
  const isMain = (myPath.pathname === '/') ? true : false;
  const bookmarkClassName = `news-card__icon news-card__icon_mark ${isMarked ? 'news-card__icon_marked' : ''}`;

  // function handleTrashClick() {
  //   props.onTrashClick(newsCard);
  // }

  function handleMarkClick() {
    if (isLoggedIn) {
      setIsMarked(!isMarked);
    }
  }

  function handleMouseToggle() {
    setIsHoverHintVisible(!isHoverHintVisible);
  }

  return (
    <div className="news-card">
      <div className="news-card__header">
        {!isMain && <button type="submit" className="news-card__key-word" >{newsCard.keyWord}</button>}
        {isHoverHintVisible && !(isMain && isLoggedIn) && <HoverHint myPath={myPath} />}
        {!isMain && <button type="submit" className="news-card__icon news-card__icon_trash"
          // onClick={handleTrashClick} 
          onMouseEnter={handleMouseToggle}
          onMouseLeave={handleMouseToggle}></button>}
        {isMain && <button type="submit" className={bookmarkClassName} onClick={handleMarkClick} onMouseEnter={handleMouseToggle} onMouseLeave={handleMouseToggle} ></button>}
      </div>
      <img alt={newsCard.title} className="news-card__picture" src={newsCard.urlToImage}
      />
      <div className="news-card__data">
        <p className="news-card__date">{newsCard.publishedAt}</p>
        <h3 className="news-card__title">{newsCard.title}</h3>
        <p className="news-card__text">{newsCard.description}</p>
      </div>
      <h4 className="news-card__source">{newsCard.source}</h4>
    </div>
  )
}

export default News;