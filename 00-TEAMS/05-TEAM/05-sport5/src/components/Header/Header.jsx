import React from 'react';
import SideMenu from '../SideMenu/SideMenu';

import './Header.css';

import favourites from '../../mock/favourites.mock';

export default function Header() {
  return (
    <header>
      <nav className="header">
        <button type="button" className="header__navigation-menu">
          {' '}
          <i className="fas fa-bars" />
          {' '}
        </button>
        <h1 className="header__main-title">Sport5</h1>
      </nav>
      <SideMenu favourites={favourites} />
    </header>
  );
}
