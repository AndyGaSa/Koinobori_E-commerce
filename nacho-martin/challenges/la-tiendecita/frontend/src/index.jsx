import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';

ReactDOM.render(

  <React.StrictMode>
    <Auth0Provider
      domain="dev-bgub9-5p.eu.auth0.com"
      clientId="XJojEcYRzwGCIkwwNdkHtENdxCYa2O6P"
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore()}>
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
