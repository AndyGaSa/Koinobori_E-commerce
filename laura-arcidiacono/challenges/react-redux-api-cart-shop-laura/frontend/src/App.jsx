import React from 'react';
import { Provider } from 'react-redux';
import Products from './components/products/Products';
import configureStore from './redux/store/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>Hola Lau!</h1>
      <Products />
    </Provider>

  );
}

export default App;
