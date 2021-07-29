import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="header__title">Users</h1>
      <Link className="header__navigation-button" to="/list">⌂</Link>
    </header>
  );
}

export default Header;
