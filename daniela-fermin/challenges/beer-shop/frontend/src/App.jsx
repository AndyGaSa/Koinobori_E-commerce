/* eslint-disable no-debugger */
import React from 'react';
import { Provider } from 'react-redux';
import ListOfBeers from './components/main/ListOfBeers/ListOfBeers';
import ShoppingCart from './components/main/ShoppingCart/ShoppingCart';
import configureStore from './redux/stores';
import './App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>Beer Bottle Shop</h1>
      <div className="main">
        <ListOfBeers />
        <ShoppingCart />
      </div>

    </Provider>
  );
}

export default App;
