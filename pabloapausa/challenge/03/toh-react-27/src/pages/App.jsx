import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Heroes from '../components/heroes/Heroes';
import Details from '../components/details/Details';
import Header from '../components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Heroes" component={Heroes} />
        <Route path="/Details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
