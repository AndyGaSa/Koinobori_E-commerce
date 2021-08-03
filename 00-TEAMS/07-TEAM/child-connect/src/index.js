/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import fetchAllEvents from './redux/actions/index';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import LogInPage from './pages/LogInPage';
import Profile from './components/Auth0/Profile';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllEvents());

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUrl={window.location.origin}
  >
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <LogInPage />
          <Switch>
            <Route exact path="/" component={LogInPage} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
