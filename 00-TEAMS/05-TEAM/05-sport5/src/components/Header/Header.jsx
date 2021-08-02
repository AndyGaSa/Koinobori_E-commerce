import React, { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';

import './Header.css';

import favourites from '../../mock/favourites.mock';

export default function Header() {
  const [navClass, setNavClass] = useState('side-menu__container');

  function changeNavState() {
    if (navClass === 'side-menu__container') {
      setNavClass('side-menu__container side-menu__container--active');
    } else {
      setNavClass('side-menu__container');
    }
  }

  return (
    <header>
      <nav className="header">
        <button type="button" className="header__navigation-menu" onClick={changeNavState}>
          <i className="fas fa-bars" />
        </button>
        <h1 className="header__main-title">Sport5</h1>
      </nav>
      <SideMenu favourites={favourites} navClass={navClass} />
    </header>
  );
}
