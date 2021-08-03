/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
/* import { Auth0Provider } from '@auth0/auth0-react'; */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import fetchAllEvents from './redux/actions/events.creators';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store);

store.dispatch(fetchAllEvents());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} />
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
