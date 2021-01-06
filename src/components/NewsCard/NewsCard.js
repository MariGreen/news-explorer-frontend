import React from 'react';
import './NewsCard.css';
import HoverHint from '../HoverHint/HoverHint';

function News(props) {
  const { newsCard, isSaved, isFound, myPath } = props;
  const [isHoverHintVisible, setIsHoverHintVisible] = React.useState(false)

  function handleTrashClick() {
    props.onTrashClick(newsCard);
  }

  // function handleHintClick() {
  //   props.onHintClick(newsCard);
  // }

  function handleMouseToggle() {
    setIsHoverHintVisible(!isHoverHintVisible);
  }

  return (
    <div className="news-card">
      <div className="news-card__header">
        {isSaved && <button type="submit" className="news-card__key-word" >{newsCard.keyWord}</button>}
        {isSaved && isHoverHintVisible && <HoverHint myPath={myPath} />}
        {isSaved && <button type="submit" className="news-card__icon news-card__icon_trash" onClick={handleTrashClick} onMouseEnter={handleMouseToggle}
          onMouseLeave={handleMouseToggle}></button>}
        {isFound && <button type="submit" className="news-card__key-word" >{newsCard.keyWord}</button>}
        {isFound && isHoverHintVisible && <HoverHint myPath={myPath} />}
        {isFound && <button type="submit" className="news-card__icon news-card__icon_mark" onClick={handleTrashClick} onMouseEnter={handleMouseToggle}
          onMouseLeave={handleMouseToggle}></button>}
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