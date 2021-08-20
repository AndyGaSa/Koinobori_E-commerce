import React from 'react';
import { Provider } from 'react-redux';
import Products from './components/Products';
import configureStore from './redux/stores';

function App() {
  return (
    <Provider store={configureStore()}>
      <main className="App">
        <h1>Skylab E-commerce</h1>
        <Products />
      </main>
    </Provider>
  );
}

export default App;
