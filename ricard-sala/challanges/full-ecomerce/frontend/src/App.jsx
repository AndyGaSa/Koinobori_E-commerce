import React, { useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/actions/actionCreators';
import Header from './pages/Header';
import Dasboard from './Components/Dashboard';
import Cart from './Components/Cart';
import User from './pages/User';
import NotFound from './pages/NotFound';

import './styles.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
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
