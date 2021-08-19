/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import configureStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
