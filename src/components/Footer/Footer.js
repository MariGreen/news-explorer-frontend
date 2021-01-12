import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import gitHub from '../../images/footer_github.svg';
import faceBook from '../../images/footer_fb.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020  Supersite, Powered&nbsp;by&nbsp;News&nbsp;API</p>
            <nav className="footer__nav">
                <ul className="footer__items">
                    <li className="footer__item footer__item_glavn"><Link to='/' className="footer__text"> Главная</Link></li>
                    <li className="footer__item footer__item_praktikum"><a href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link"><p className="footer__text"> Яндекс.Практикум</p></a></li>
                    <li className="footer__item footer__item_icon"><a href="http://www.github.com" target="_blank" rel="noreferrer" className="footer__link"><img className="footer__icon" alt='Github icon' src={gitHub} /></a>
                        <a href="http://www.facebook.com" target="_blank" rel="noreferrer" className="footer__link"><img className="footer__icon" alt='Github icon' src={faceBook} /></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;