import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SideMenu from './components/SideMenu/SideMenu';
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
  const [sideMenuClass, setSideMenuClass] = useState('side-menu--closed');

  return (
    <>
      <Header
        sideMenuClass={sideMenuClass}
        setSideMenuClass={setSideMenuClass}
        currentUserId={currentUserId}
      />
      <SideMenu
        sideMenuClass={sideMenuClass}
        setSideMenuClass={setSideMenuClass}
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
