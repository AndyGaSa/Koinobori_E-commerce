import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/heroes">Heroes</a>
      </nav>
    </header>
  );
}
