import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/home">HOME</Link>
          <Link to="/browse">BROWSE</Link>
          <Link to="/all">ALL ITEMS</Link>
        </ul>
      </nav>
      <h1>BEERLY</h1>
      <nav>
        <input type="text" />
        <Link to="/cart">cart</Link>
      </nav>
    </header>
  );
}
