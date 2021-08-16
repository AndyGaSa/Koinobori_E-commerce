import React from 'react';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

import './app.scss';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
