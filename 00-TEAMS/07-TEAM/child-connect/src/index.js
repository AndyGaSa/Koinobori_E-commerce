/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/store/index';

ReactDOM.render(

  <React.StrictMode>
    <Auth0Provider
      domain="dev-5im3f8si.us.auth0.com"
      clientId="012NmOfxleSuWEuJB4b3sLOf3CtqVKEu"
      redirectUri="http://localhost:3000/dashboard"
    >
      <Provider store={store()}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
