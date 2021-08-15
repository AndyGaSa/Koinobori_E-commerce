import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/header/Header';
import Products from './components/products/Products';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Products />
    </Provider>

  );
}

export default App;
