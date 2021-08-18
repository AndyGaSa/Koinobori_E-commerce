import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Trending from './Trending';
import Category from './Category';
import Cart from './Cart';
import Details from './Details';
import NotFound from './NotFound';

export default function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Trending} />
      <Redirect path="/trending" to="/" />
      <Route path="/category/:category" component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/details/:category/:stockId" component={Details} />
      <Route component={NotFound} />
    </Switch>
  );
}
