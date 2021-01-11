import React from 'react';
import PropTypes from 'prop-types';
import './HoverHint.css';

function HoverHint(props) {
  const { myPath } = props;
  const hintText = (myPath.pathname === '/') ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых';
  const buttonTextStyle = (myPath.pathname === '/') ? 'news-card__hint news-card__hint_mini' : 'news-card__hint';

  return (
    <div className={buttonTextStyle}>{hintText}</div>
  );
}

HoverHint.propTypes = {
  myPath: PropTypes.string
}

export default HoverHint;