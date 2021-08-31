import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import Header from './component/Header/Header';
import UsersList from './pages/UsersList/UsersList';
import UsersDetails from './pages/details/UsersDetails';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact component={UsersList} />
          <Redirect path="/userList" to="/" />
          <Route path="/details/:userId" component={UsersDetails} />
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
