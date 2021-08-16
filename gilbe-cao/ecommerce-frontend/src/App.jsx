import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Products from './components/Products';
import RandomBeer from './components/RandomBeer';
import configureStore from './redux/stores';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>Skylab Craft Beers</h1>
      <RandomBeer />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
