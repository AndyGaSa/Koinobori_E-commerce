import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Heroes from './pages/Heroes';
import NotFound from './pages/NotFound';

import './App.css';

export default function App() {
  return (
    <Provider store={configureStore()}>
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
    </Provider>
  );
}
