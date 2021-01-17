import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import newsApi from '../../utils/NewsApi';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import ResultPopup from '../ResultPopup/ResultPopup';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import MenuPopup from '../MenuPopup/MenuPopup';
import NothingFound from '../NothingFound/NothingFound';
import { PreloaderContext } from '../../context/PreloaderContext';
import Preloader from '../Preloader/Preloader';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(true);
  const user = { name: "Грета Гарбо", email: "email@email.de" };
  const myPath = useLocation();

  const [news, setNews] = useState([]);
  const [results, setResults] = useState(-1);

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function handleLogin() {
    setLoggedIn(true);
    closeAllPopups();
  }

  function handleLogOutClick() {
    setLoggedIn(false);
  }

  function handleSwitchToLogin() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  };

  function handleSubmitRegister() {
    setIsRegisterPopupOpen(false);
    setIsResultPopupOpen(true);
  }

  function handleSwitchPopups() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };

  function onMenuOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsResultPopupOpen(false);
    setIsMenuPopupOpen(false);
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function closeByOverlayClick(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', closeByOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByOverlayClick);
    };
  });




  function handleSearch(keyWord) {
    setIsLoading(true);
    newsApi.getNews(keyWord)
      .then((data) => {
        setNews(data.articles);
        setResults(data.totalResults);
      }
      )
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <div className="page page__container">
      <PreloaderContext.Provider value={isLoading}>
        <Header loggedIn={loggedIn} userName={user.name} onLoginClick={handleLoginClick} onSignOut={handleLogOutClick} myPath={myPath} onMenuOpen={onMenuOpen} isMenuPopupOpen={isMenuPopupOpen} isPopupOpen={isMenuPopupOpen || isLoginPopupOpen || isRegisterPopupOpen || isResultPopupOpen} onClose={closeAllPopups} />

        <Switch>

          <Route path='/saved-news'>
            <SavedNewsHeader />
            <SavedNews myPath={myPath} isLoggedIn={loggedIn} />
          </Route>

          <Route path='/'>
            <SeachForm onSearch={handleSearch} />
            {isLoading && <Preloader />}
            {results !== -1 && (results > 0 ? <Main myPath={myPath} isLoggedIn={loggedIn} news={news} /> : <NothingFound />)}
            <About />
          </Route>

        </Switch>

        <Footer />

        <section className="popups">
          <LoginPopup
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onRegisterClick={handleSwitchPopups}
            onSubmit={handleLogin}
          />

          <RegisterPopup
            isOpen={isRegisterPopupOpen}
            onClose={closeAllPopups}
            onLoginClick={handleSwitchPopups}
            onSubmit={handleSubmitRegister}
          />

          < ResultPopup
            isOpen={isResultPopupOpen}
            onClose={closeAllPopups}
            onResultClick={handleSwitchToLogin}
          />

          <MenuPopup
            isOpen={isMenuPopupOpen}
            onAuthClick={handleSwitchToLogin}>
          </MenuPopup>
        </section>
      </PreloaderContext.Provider>
    </div>
  );
}

export default App;


