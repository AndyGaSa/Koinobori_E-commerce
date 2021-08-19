/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import configureStore from './redux/stores/index';
import Protected from './components/login/Protected';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

const ProtecedDashboard = Protected('/', Dashboard, true);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Protected />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
