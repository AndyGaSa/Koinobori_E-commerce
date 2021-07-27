import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import './styles.css';
import Dashboard from './pages/Dashboard';
import Heroes from './pages/Heroes';
import Header from './components/Header';
import Details from './pages/Details';

import NotFound from './pages/NotFound';

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
