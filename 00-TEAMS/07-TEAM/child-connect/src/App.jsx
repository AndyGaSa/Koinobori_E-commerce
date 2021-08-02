/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
// import UserProfile from './pages/UserProfile';
import EventDetails from './components/EventDetails';
// import Footer from './components/Footer';
// import NotFound from './pages/NotFound';

import './App.css';

function App({ events }) {
  console.log(events);
  return (
    <>
      <h1>Hola mundo</h1>
      <p>{events[0]?.activity}</p>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect path="/dashboard" to="/" />
        {/* <Route path="/UserProfile" component={UserProfile} /> */}
        <Route path="/EventDetails" component={EventDetails} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(
  mapStateToProps
)(App);
