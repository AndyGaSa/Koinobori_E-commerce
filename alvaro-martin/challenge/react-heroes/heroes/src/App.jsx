/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/details/:heroId" component={Details} />
        <Route path="/heroes" component={Heroes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
