import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Heroes from './pages/Heroes/Heroes';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound';

import './App.css';
import Header from './components/Header/Header';
import './pages/Styles.css';

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
