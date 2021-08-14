import React from 'react';

import { Provider } from 'react-redux';
import configureStore from '../redux/stores';

import ProductList from '../components/ProductList/ProductList';
import Cart from '../components/Cart/Cart';

export default function Desktop() {
  return (
    <>
      <Provider store={configureStore()}>
        <h2>Esto es el desktop</h2>
        <ProductList />
        <Cart />
      </Provider>
    </>
  );
}
