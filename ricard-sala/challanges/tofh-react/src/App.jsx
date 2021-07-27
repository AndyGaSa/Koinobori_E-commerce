import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './pages/DashBoard/Dashboard';
import Details from './pages/Details/Details';
import Heroes from './pages/Heroes/Heroes';
import Header from './components/Header/Header';
import Notfound from './pages/Notfound';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/heroes" component={Heroes} />
        <Route path="/details/:heroId" component={Details} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
