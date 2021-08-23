import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Sneakers from './components/Sneakers/sneakers';
import Cart from './components/Cart/cart';
import configureStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <section className="sneaker-cart">
        <Sneakers />
        <Cart />
      </section>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
