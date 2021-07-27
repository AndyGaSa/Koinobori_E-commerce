import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Header from './components/Header/Header';
import './components/Styles.css';
import Dashboard from './components/Dashboard/Dashboard';
import Heroes from './components/Heroes/Heroes';
import Details from './components/Details/Details';
import NotFound from './components/NotFound';

function App() {
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

export default App;
