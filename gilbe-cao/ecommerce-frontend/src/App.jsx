import React from 'react';
import { Provider } from 'react-redux';
import Products from './components/Products';
import configureStore from './redux/stores';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>Skylab Store</h1>
      <Products />
    </Provider>
  );
}

export default App;
