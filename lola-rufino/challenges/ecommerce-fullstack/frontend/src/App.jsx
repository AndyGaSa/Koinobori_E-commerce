import React from 'react';
import { Provider } from 'react-redux';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import configureStore from './redux/store';
import './App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <main className="main">
        <h1 className="main__title">My Japanese Food E-Commerce</h1>
        <div className="main__container">
          <Products />
          <ShoppingCart />
        </div>
      </main>
    </Provider>
  );
}

export default App;
