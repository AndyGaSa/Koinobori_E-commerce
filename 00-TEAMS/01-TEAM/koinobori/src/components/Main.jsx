import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Trending from './Trending';
import Category from './Category';
import Details from './Details';
import NotFound from './NotFound';

export default function Main() {
  <Switch>
    <Route path="/" exact component={Trending} />
    <Route path="/trending" component={Trending} />
    <Route path="/category" component={Category} />
    <Route path="/details" component={Details} />
    <Route component={NotFound} />
  </Switch>;
}
