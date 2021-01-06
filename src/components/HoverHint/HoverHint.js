import React from 'react';
import './HoverHint.css';

function HoverHint(props) {
  const { myPath } = props;
  // const hintText = true;
  const hintText = (myPath.pathname === '/') ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых';
  const buttonTextStyle = (myPath.pathname === '/') ? 'news-card__hint news-card__hint_mini' : 'news-card__hint';

  return (
    <div className={buttonTextStyle}>{hintText}</div>
  );
}

export default HoverHint;