import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <h2>My Favourite Cameras</h2>
      <nav>
        <Link className="header__nav" to="/dashboard">Dashboard</Link>
        <Link className="header__nav" to="/cameras">Cameras</Link>
      </nav>
    </>
  );
}
