import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Users</h1>
      <Link to="/list">⌂</Link>
    </header>
  );
}

export default Header;
