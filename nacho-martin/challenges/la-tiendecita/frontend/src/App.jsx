import React from 'react';
import Cart from './components/Cart';
import FunkoList from './components/FunkoList';
import Header from './components/Header';

import('./styles/global.scss');

function App() {
  return (
    <>
      <Header />
      <FunkoList />
      <Cart />
    </>
  );
}

export default App;
