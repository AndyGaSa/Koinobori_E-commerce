import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';

import Heroes from './pages/Heroes/Heroes';
import Dashboard from './pages/Dashboard/Dashboard';
import Details from './pages/Details/Details';
import './App.css';
import './Styles.css';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/Notfound';

export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Redirect path="/dashboard" to="/" />
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/heroes" component={Heroes} />

        <Route path="/details/:heroId" component={Details} />
        <Route component={NotFound} />

      </Switch>

    </BrowserRouter>
  );
}
