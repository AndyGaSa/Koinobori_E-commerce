import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import configureStore from './redux/stores';
import './firebase/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Header />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();