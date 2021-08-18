import React from 'react';
import { useSelector } from 'react-redux';

import GnomeProfile from '../../components/GnomeProfile/GnomeProfile';
import Login from '../../components/Login/Login';

import './homePage.scss';

function HomePage() {
  const gnome = useSelector(({ currentGnome }) => currentGnome);

  return (
    <main>
      {Object.keys(gnome)?.length
        ? <GnomeProfile gnome={gnome} />
        : <Login />}
    </main>
  );
}

export default HomePage;
