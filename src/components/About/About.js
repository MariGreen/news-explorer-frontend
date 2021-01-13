import React from 'react';
import './About.css';
import author from '../../images/foto_belok.jpg';


function About() {
  return (
    <section className="about section page__about">
      <div className="about__profile">
        <img className="about__photo" alt='Фото автора проекта' src={author} />
      </div>
      <div className="about__author">
        <h2 className="section__title">Об авторе</h2>
        <div><p className="section__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
          <p className="section__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p></div>
      </div>
    </section>
  );
}

export default About;