import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import GnomeProfile from './components/GnomeProfile/GnomeProfile';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import Notifications from './components/Notifications/Notifications';

import './app.scss';

function App() {
  const currentUser = useSelector(({ user }) => user);
  const gnome = useSelector(({ currentGnome }) => currentGnome);

  const {
    _id: currentUserId,
    friends: currentUserFriends,
    adversaries: currentUserAdversaries
  } = currentUser;

  return (
    <>
      <Header
        currentUser={currentUser}
      />
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute
          component={() => (
            <GnomeProfile
              gnome={gnome}
              currentUserId={currentUserId}
              currentUserFriends={currentUserFriends}
              currentUserAdversaries={currentUserAdversaries}
            />
          )}
          path="/"
          gnome={gnome}
        />
      </Switch>
      <Notifications />

    </>
  );
}

export default App;
