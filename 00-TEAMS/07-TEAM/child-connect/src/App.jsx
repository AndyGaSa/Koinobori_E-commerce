/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
// import UserProfile from './pages/UserProfile';
// import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import Perfil from './pages/Perfil';
// import NotFound from './pages/NotFound';

import './App.css';

function App({ events }) {
  console.log(events);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(
  mapStateToProps
)(App);
