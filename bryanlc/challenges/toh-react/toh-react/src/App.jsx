import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Heroes from './pages/Heroes';
import Notfound from './pages/Notfound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact component={Dashboard} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/heroes" component={Heroes} />
        <Route path="/detail/:heroId" component={Detail} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
