import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo-item" src="https://i.ibb.co/SXY8TZG/LOGO-PANORAMIC-SOLO.png" alt="LOGO-PANORAMIC-SOLO" border="0" />
        <h1 className="header_title">Panoramic</h1>
      </div>
      <nav className="header__navegation">
        <Link className="header__navegation__link" to="/login">Login</Link>
        <Link className="header__navegation__link" to="/perfil">Profile</Link>
        <Link className="header__navegation__link" to="/search">Search artist</Link>
        <Link className="header__navegation__link" to="/Favouritelist">♡ List</Link>
      </nav>
    </header>
  );
}
