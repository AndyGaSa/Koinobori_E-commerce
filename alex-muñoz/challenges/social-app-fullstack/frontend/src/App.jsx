import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import FriendList from './components/FriendList';
import UserList from './components/UserList';
import CurrentUser from './components/CurrentUser';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/friendList" component={FriendList} />
          <Route path="/:userId" component={CurrentUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
