import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import UserList from './component/UserList';
import configureStore from './redux/store';
import UserForm from './component/UserForm';
import EmptyForm from './component/EmptyForm';
import NotFound from './page/NotFound';
import UserSearch from './component/UserSearch';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <h1>User&apos;s Data</h1>
        <UserList />
        <Switch>
          <Route path="/" exact component={EmptyForm} />
          <Route path="/userForm/:userId" component={UserForm} />
          <Route component={NotFound} />
        </Switch>
        <UserSearch />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
