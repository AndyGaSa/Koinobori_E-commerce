import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
// import UserProfile from './pages/UserProfile';
import EventDetails from './components/EventDetails';
// import Footer from './components/Footer';
// import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <>
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

export default App;
