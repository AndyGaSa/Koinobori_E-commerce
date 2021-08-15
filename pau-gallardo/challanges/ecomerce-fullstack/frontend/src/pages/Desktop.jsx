import React from 'react';

import { Provider } from 'react-redux';
import configureStore from '../redux/stores';

import ProductList from '../components/ProductList/ProductList';
import Cart from '../components/Cart/Cart';

import './Desktop.scss';

export default function Desktop() {
  return (
    <>
      <Provider store={configureStore()}>
        <h2>Esto es el desktop</h2>
        <div className="main">
          <div className="main__product-list">
            <ProductList />
          </div>
          <div className="main__cart">
            <Cart />
          </div>
        </div>
      </Provider>
    </>
  );
}
