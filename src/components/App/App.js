import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
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
// import NothingFound from '../NothingFound/NothingFound';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(true);
  const user = { name: "Грета Гарбо", email: "email@email.de" };
  const myPath = useLocation();

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function handleLogOutClick() {
    setLoggedIn(false);
  }

  function handleSwitchToLogin() {
    setIsLoginPopupOpen(true);
    setIsMenuPopupOpen(false);
  };


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


  return (
    <div className="page page__container">
      <Header loggedIn={loggedIn} userName={user.name} onLoginClick={handleLoginClick} onSignOut={handleLogOutClick} myPath={myPath} onMenuOpen={onMenuOpen} />

      <Switch>

        <Route path='/saved-news'>
          <SavedNewsHeader />
          <SavedNews myPath={myPath} isLoggedIn={loggedIn} />
        </Route>

        <Route path='/'>
          <SeachForm />
          {/* <NothingFound /> */}
          <Main myPath={myPath} isLoggedIn={loggedIn} />
          <About />
        </Route>

      </Switch>

      <Footer />

      <section className="popups">
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onRegisterClick={handleSwitchPopups}
        />

        <RegisterPopup
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onLoginClick={handleSwitchPopups}
        />

        < ResultPopup
          isOpen={isResultPopupOpen}
          onClose={closeAllPopups}
        />

        <MenuPopup
          isOpen={isMenuPopupOpen}
          onClose={closeAllPopups}
          onAuthClick={handleSwitchToLogin}>
        </MenuPopup>
      </section>
    </div>
  );
}

export default App;

// function Component({ onClick, onChange, value, children }) {
//   // ...
// }

// Component.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
//   children: PropTypes.node,
// }

// export default Component; 
