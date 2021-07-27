import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Header() {
  return (
    <header className="header">
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
    </header>
  );
}
