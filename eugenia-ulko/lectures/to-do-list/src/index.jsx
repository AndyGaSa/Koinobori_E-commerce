import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ToDo from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './Redux/store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <ToDo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
