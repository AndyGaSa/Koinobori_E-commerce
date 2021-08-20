/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store/index';
import App from './pages/App';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/" component={App} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
