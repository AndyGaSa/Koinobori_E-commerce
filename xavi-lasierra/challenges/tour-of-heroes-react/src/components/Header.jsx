import React from 'react';
import '../styles.css';

function Header() {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <nav>
        <button type="button" onClick="">Dashboard</button>
        <button type="button" onClick="">Heroes</button>
      </nav>
    </header>
  );
}

export default Header;
