import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import ListOfUsers from '../components/ListOfUsers';
import Details from '../components/Details';

export default function UserList() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ListOfUsers} />
          <Redirect path={ListOfUsers} to="/" />
          <Route path="../components/Details" component={Details} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}
