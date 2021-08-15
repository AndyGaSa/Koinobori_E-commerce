import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/stores';

import './index.css';

import Desktop from './pages/Desktop/Desktop';
import Username from './pages/Username/Username';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Username />
      <Desktop />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'),
);
