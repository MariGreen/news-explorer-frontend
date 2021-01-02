import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import './App.css';

function App() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(true);

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
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
      <Header />
      <SeachForm />
      <Main />
      <About />
      <Footer />

      <section className="popups">
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
        />

        {/* <RegisterPopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          mess={message} /> */}
      </section>
    </div>
  );
}

export default App;
