import React, { useState } from 'react';

import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import GnomeProfile from './pages/GnomeProfile/GnomeProfile';

import './app.scss';

function App() {
  const [sideMenuClass, setSideMenuClass] = useState('side-menu--closed');

  return (
    <>
      <Header sideMenuClass={sideMenuClass} setSideMenuClass={setSideMenuClass} />
      <SideMenu sideMenuClass={sideMenuClass} />
      <GnomeProfile />
    </>
  );
}

export default App;
