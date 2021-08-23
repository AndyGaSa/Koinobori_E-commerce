/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import configureStore from './redux/stores/index';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <React.StrictMode>
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
