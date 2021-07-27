/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/list">Heroes</Link>
      </nav>
    </header>
  );
}

export default Header;
