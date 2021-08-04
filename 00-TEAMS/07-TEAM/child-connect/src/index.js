/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import fetchAllEvents from './redux/actions/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllEvents());

ReactDOM.render(
  // <Auth0Provider
  //   domain={process.env.REACT_APP_AUTH0_DOMAIN}
  //   clientId={process.env.REACT_APP_AUTH0_CLIENTID}
  //   redirectUrl={window.location.origin}
  // >
  //   <React.StrictMode>
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <LogInPage />
  //         <Switch>
  //           <Route exact path="/" component={LogInPage} />
  //           <Route exact path="/profile" component={Profile} />
  //         </Switch>
  //       </BrowserRouter>
  //     </Provider>
  //   </React.StrictMode>
  // </Auth0Provider>,
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
