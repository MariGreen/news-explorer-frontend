import React from 'react';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="page page__container">
      <Header />
      <SeachForm />
      <Main />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
