import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import HomePage from './pages/HomePage/HomePage';

import './app.scss';

function App() {
  const currentUser = useSelector(({ user }) => user);
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
      <HomePage
        currentUserId={currentUserId}
        currentUserFriends={currentUserFriends}
        currentUserAdversaries={currentUserAdversaries}
      />
    </>
  );
}

export default App;
