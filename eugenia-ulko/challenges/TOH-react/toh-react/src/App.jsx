import React from 'react';
import './App.css';
import {
  BrowserRouter, Redirect, Switch, Route
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Heroes from './Pages/Heroes';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/heroes" component={Heroes} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
