import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Heroes from './pages/Heroes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/heroes" component={Heroes} />
        <Route path="/details/:heroId" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
