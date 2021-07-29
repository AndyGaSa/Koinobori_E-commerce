import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Heroes from './pages/Heroes';
import Header from './components/Header';
import Details from './pages/Details';
import configureStore from './redux/store';

import NotFound from './pages/NotFound';

import './App.css';

function App() {
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

export default App;
