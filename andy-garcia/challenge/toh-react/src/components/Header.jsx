import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types

function Header() {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
    </>
  );
}

export default Header;
