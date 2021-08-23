import React from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import FunkoList from './components/FunkoList';
import Header from './components/Header';

import('./styles/global.scss');

function App() {
  return (
    <>
      <Header />
      <main>
        <FunkoList />
        <Cart />
      </main>
      <Footer />
    </>
  );
}

export default App;
