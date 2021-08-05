import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import configureStore from './redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import List from './pages/List';
import SearchedArtistList from './pages/SearchArtists';

ReactDOM.render(
  <Auth0Provider>
    <React.StrictMode>
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" />
            <Route path="/login" component={Login} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/profile" component={Profile} />
            <Route path="/list" component={List} />
            <Route path="/search" component={SearchedArtistList} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
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
