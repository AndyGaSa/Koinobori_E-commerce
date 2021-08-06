import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import FavouriteArtists from './pages/FavouriteArtists';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect path="/home" to="/" />
          <Route path="/login" component={Login} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/profile" component={Profile} />
          <Route path="/Favouritelist" component={FavouriteArtists} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
