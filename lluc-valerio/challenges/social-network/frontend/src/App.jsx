import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import Friends from './components/Friends/Friends';
import Adversaries from './components/Adversaries/Adversaries';

import configureStore from './redux/stores';

import './styles/App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/friends" component={Friends} />
          <Route path="/adversaries" component={Adversaries} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
