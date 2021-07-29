import React from 'react';
import {
  BrowserRouter, Switch, Redirect, Route,
} from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Heroes from './pages/heroes/Heroes';
import Details from './pages/details/Details';
import Header from './components/Header';

import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect path="/Dashboard" to="/" />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Heroes" component={Heroes} />
        <Route path="/Details/:heroId" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
