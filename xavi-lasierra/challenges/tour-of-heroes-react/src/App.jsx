import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import configureStore from './redux/store';

import './styles.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/dashboard" to="/" />
          <Route path="/list" component={List} />
          <Route path="/detail/:heroId" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
