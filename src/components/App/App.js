import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import ResultPopup from '../ResultPopup/ResultPopup';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NothingFound from '../NothingFound/NothingFound';
import './App.css';

function App() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  const user = { name: "Грета Гарбо", email: "email@email.de" };

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function handleLogOutClick() {
    setLoggedIn(false);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsResultPopupOpen(false);
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
      <Header loggedIn={loggedIn} userName={user.name} onLoginClick={handleLoginClick} onSignOut={handleLogOutClick} />
      <SeachForm />
      <Main />
      <SavedNewsHeader />
      <About />
      <NothingFound />
      <Footer />

      <section className="popups">
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
        />

        <RegisterPopup
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}

        />

        < ResultPopup
          isOpen={isResultPopupOpen}
          onClose={closeAllPopups}
        />
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
