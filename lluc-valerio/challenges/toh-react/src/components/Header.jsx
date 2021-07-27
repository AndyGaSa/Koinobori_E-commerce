import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1>Tour of Heroes</h1>
      <nav>
        <button type="button">Dashboard</button>
        <button type="button">Heroes</button>
      </nav>
    </header>
  );
}
