import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <h1>Hola mundo</h1>
      <Header />
      <Switch>
        {/* <Route exact path={`${Path}/Dashboard`} /> */}
        <Route path="/Dashboard" component={Dashboard} />
        {/* <Route path="/UserProfile" component={UserProfile} /> */}
        <Route path="/EventDetails" component={EventDetails} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
