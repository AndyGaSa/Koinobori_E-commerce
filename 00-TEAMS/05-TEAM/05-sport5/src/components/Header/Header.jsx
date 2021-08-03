import React, { useState } from 'react';

import SideMenu from '../SideMenu/SideMenu';

import './Header.scss';

export default function Header() {
  const [navClass, setNavClass] = useState('side-menu');

  function changeNavState() {
    if (navClass === 'side-menu') {
      setNavClass('side-menu side-menu--active');
    } else {
      setNavClass('side-menu');
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
      <SideMenu navClass={navClass} changeNavState={changeNavState} />
    </header>
  );
}
