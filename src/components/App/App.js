import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedPoute';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth.js';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import ResultPopup from '../ResultPopup/ResultPopup';
import MenuPopup from '../MenuPopup/MenuPopup';
import NothingFound from '../NothingFound/NothingFound';
import { PreloaderContext } from '../../context/PreloaderContext';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  // const user = { name: "Грета Гарбо", email: "email@email.de" };
  const myPath = useLocation();

  const [news, setNews] = useState([]);
  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(-1);
  const [currentUser, setCurrentUser] = useState({});
  // const history = useHistory();

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {

          if (res) {
            if (res === 401) {
              localStorage.removeItem(jwt);
            } else {
              setLoggedIn(true);
              setCurrentUser({
                email: res.data.email,
                name: res.data.name,
              });
              closeAllPopups();
              // history.push('/');
            }
          }
        })
        .catch(() => console.log({ message: 'Токен не передан или передан не в том формате' }));
    }
  };

  useEffect(() => tokenCheck(), []);


  const handleLogin = (email, password) => auth.authorize(email, password)
    .then((data) => {
      if (!data) {
        throw new Error({ message: 'Токен не передан или передан не в том формате' });
      } else {
        tokenCheck();
      }
    }).catch((err) => console.log(err));

  function onSignOut() {
    setLoggedIn(false);
  }

  function handleSwitchToLogin() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  };

  function handleSubmitRegister(email, password, name) {
    auth.register(email, password, name).then((response) => {
      if (response.status === 201) {
        setIsRegisterPopupOpen(false);
        setIsResultPopupOpen(true);
        return response.json()
      } else {
        throw new Error('Something went wrong');
      }
    })
      .catch((err) => {
        console.log(err);
      });

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

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      mainApi.getArticles()
        .then((articles) => {
          setArticles(articles.data);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);


  function handleSaveArticle(article) {
    setIsLoading(true);
    mainApi
      .saveArticle(article)
      .then((article) => {
        setArticles(article);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function handleDeleteArticle(article) {
    setIsLoading(true);
    mainApi.deleteArticle(article._id)
      .then(() => {
        setArticles(
          articles.filter((item) => {
            return item._id !== article._id;
          })
        )
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearch(keyword) {
    setIsLoading(true);
    newsApi.getNews(keyword)
      .then((data) => {
        const articles = data.articles.map((item) => ({ ...item, keyword }));
        setNews(articles);
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
        <CurrentUserContext.Provider value={currentUser}>
          <Header loggedIn={loggedIn} onLoginClick={handleLoginClick} onSignOut={onSignOut} myPath={myPath} onMenuOpen={onMenuOpen} isMenuPopupOpen={isMenuPopupOpen} isPopupOpen={isMenuPopupOpen || isLoginPopupOpen || isRegisterPopupOpen || isResultPopupOpen} onClose={closeAllPopups} />

          <Switch>

            {/* <ProtectedRoute path='/saved-news' component={SavedNewsHeader} myPath={myPath} isLoggedIn={loggedIn} ></ProtectedRoute> */}
            <ProtectedRoute exact path='/saved-news' component={SavedNews} myPath={myPath} isLoggedIn={loggedIn} onRouteClick={handleLoginClick} articles={articles} onTrashClick={handleDeleteArticle} />

            <Route path='/'>
              <SeachForm onSearch={handleSearch} />
              {isLoading && <Preloader />}
              {results !== -1 && (results > 0 ? <Main myPath={myPath} isLoggedIn={loggedIn} news={news} onSaveClick={handleSaveArticle} /> : <NothingFound />)}
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
        </CurrentUserContext.Provider>
      </PreloaderContext.Provider>
    </div>
  );
}

export default App;


