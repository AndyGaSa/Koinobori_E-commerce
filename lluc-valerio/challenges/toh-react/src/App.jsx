import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Heroes from './pages/Heroes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>

  );
}
