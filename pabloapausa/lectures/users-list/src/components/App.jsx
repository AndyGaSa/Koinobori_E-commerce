import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

import List from './List';
import Details from './Details';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/details/:userId" component={Details} />
          <Redirect path="/list" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
