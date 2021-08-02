/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Heroes">Heroes</Link>
      </nav>

    </header>
  );
}
