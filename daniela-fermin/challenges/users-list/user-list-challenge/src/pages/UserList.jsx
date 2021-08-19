import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header/Header';
import ListOfUsers from '../components/ListOfUsers/ListOfUsers';
import Details from '../components/Details/Details';
import configureStore from '../redux/store';

export default function UserList() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ListOfUsers} />
          <Redirect path="/listofusers" to="/" />
          <Route path="/details/:userId" component={Details} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
