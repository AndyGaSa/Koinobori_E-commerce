import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import render from 'react-dom';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <h1>Hola mundo</h1>
        </Switch>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
