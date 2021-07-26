/* eslint-disable react/prop-types */
import React from 'react';

function Header({ changePage }) {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <nav>
        <button type="button" onClick={() => changePage(0)}>Dashboard</button>
        <button type="button" onClick={() => changePage(1)}>Heroes</button>
      </nav>
    </header>
  );
}

export default Header;
