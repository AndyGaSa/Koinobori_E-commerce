import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';

import configureStore from './redux/store/index';
import Dashboard from './components/main/dashboard/Dashboard';
import Details from './components/main/details/Details';
import Profile from './components/main/profile/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import notFound from './components/notFound/notFound';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/dashboard" to="/" />
          <Route path="/details" component={Details} />
          <Route path="/profile" component={Profile} />
          <Route component={notFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
