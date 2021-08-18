/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/header/Header';
import MainContainer from './components/mainContainer/MainContainer';
import Details from './components/details/Details';
import NotFound from './components/notFound/NotFound';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/details/:userId" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
