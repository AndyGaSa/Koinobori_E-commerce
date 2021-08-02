import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import configureStore from './redux/store/index';
import Dashboard from './components/main/dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
