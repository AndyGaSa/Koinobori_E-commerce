import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import GetDrivers from './pages/Drivers';
// import DetailsConstructor from './components/Details-constructor/Details.constructor';
import ListDriver from './components/List/List-driver';
import ListConstructor from './components/List/List-constructor';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <GetDrivers />
      <ListDriver />
      <ListConstructor />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
