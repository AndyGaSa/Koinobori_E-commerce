import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from './Dashboard';
import Details from './Details';
import Heroes from './Heroes';
import NotFound from './NotFound';
import configureStore from '../redux/store';

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
