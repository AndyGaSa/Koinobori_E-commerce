/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store/index';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-veeljms2.us.auth0.com"
      clientId="cx85Rv9QsmKw3ZEnA6Z6AbkQVsJbosQX"
      redirectUri={window.location.origin}
    >
      <Provider store={store()}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
