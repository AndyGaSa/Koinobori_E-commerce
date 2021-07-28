import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Heroes from './pages/Heroes/Heroes';
import Dashboard from './pages/Dashboard/Dashboard';
import Details from './pages/Details/Details';
import './App.css';
import './Styles.css';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/Notfound';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>

        <Header />

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/Dashboard" to="/" />
          <Route path="/Heroes" component={Heroes} />
          <Route path="/Details/:heroId" component={Details} />
          <Route component={NotFound} />
        </Switch>

      </BrowserRouter>
    </Provider>
  );
}
