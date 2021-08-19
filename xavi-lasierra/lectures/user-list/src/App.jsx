import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import NotFound from './pages/NotFound/NotFound';

import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={List} />
          <Redirect path="/list" to="/" />
          <Route path="/detail/:userId" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
