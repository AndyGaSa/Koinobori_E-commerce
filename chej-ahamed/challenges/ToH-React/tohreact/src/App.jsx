import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';

import Heroes from './components/Heroes/Heroes';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import './App.css';
import './components/Styles.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/Notfound';

export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Redirect path="/dashboard" to="/" />
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/heroes" component={Heroes} />

        <Route path="/details" component={Details} />
        <Route component={NotFound} />

      </Switch>

    </BrowserRouter>
  );
}
