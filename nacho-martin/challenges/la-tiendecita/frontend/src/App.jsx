import React from 'react';
import Cart from './components/Cart';
import FunkoList from './components/FunkoList';

import('./styles/global.scss');

function App() {
  return (
    <>
      <FunkoList />
      <Cart />
    </>
  );
}

export default App;
