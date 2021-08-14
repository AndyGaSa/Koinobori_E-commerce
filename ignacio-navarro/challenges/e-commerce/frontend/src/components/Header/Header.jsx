import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Browse</li>
          <li>All items</li>
        </ul>
      </nav>
      <h1>BEERLY</h1>
      <nav>
        <input type="text" />
        <button type="button">cart</button>
      </nav>
    </header>
  );
}
