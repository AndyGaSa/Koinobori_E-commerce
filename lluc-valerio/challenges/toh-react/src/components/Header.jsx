import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

// eslint-disable-next-line react/prop-types
export default function Header() {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  localStorage.setItem('heroes', JSON.stringify(heroes));

  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link className="header-link" to="/dashboard">Dashboard</Link>
        <Link className="header-link" to="/heroes">Heroes</Link>
      </nav>
    </>
  );
}
