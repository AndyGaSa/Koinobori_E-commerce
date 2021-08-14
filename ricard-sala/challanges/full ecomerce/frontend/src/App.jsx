import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from './pages/Header';
import Dasboard from './Components/Dashboard';
import Cart from './Components/Cart';
import User from './pages/User';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dasboard} />
        <Redirect path="/dasboard" to="/" />
        <Route path="/user" component={User} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
