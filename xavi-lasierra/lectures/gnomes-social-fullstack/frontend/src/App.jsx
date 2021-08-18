import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import HomePage from './pages/HomePage/HomePage';

import './app.scss';

function App() {
  const currentUserId = useSelector(({ user }) => user);
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
      <HomePage />
    </>
  );
}

export default App;
