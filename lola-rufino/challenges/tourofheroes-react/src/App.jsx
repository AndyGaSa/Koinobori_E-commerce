import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import Header from './components/Header';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Details from './components/Details';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/dashboard" to="/" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/details/:heroId" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
