import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';

import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
    </Provider>
  );
}

export default App;
