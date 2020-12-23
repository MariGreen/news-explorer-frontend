import React from 'react';
import './Footer.css';
import gitHub from '../../images/footer_github.png';
import faceBook from '../../images/footer_fb.png';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020  Supersite, Powered by News API</p>
            <nav className="footer__nav">
                <ul className="footer__items">
                    <li className="footer__item"><p className="footer__text"> Главная</p></li>
                    <li className="footer__item"><a href="https://yandex.praktikum/" target="_blank" rel="noreferrer" className="footer__link"><p className="footer__text"> Яндекс.Практикум</p></a></li>
                    <li className="footer__item"><a href="#" target="_blank" rel="noreferrer" className="footer__link"><img className="footer__icon" alt='Github icon' src={gitHub} /></a>
                        <a href="#" target="_blank" rel="noreferrer" className="footer__link"><img className="footer__icon" alt='Github icon' src={faceBook} /></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;