import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Styles from './Styles.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo-item" src="https://i.ibb.co/SXY8TZG/LOGO-PANORAMIC-SOLO.png" alt="LOGO-PANORAMIC-SOLO" border="0" />
        <h1 className="header_title">Panoramic</h1>
      </div>
      <nav className="header__navegation">
        <Link className="header__navegation__link" to="/register">Register</Link>
        <Link className="header__navegation__link" to="/login">Login</Link>
        <Link className="header__navegation__link" to="/perfil">Perfil</Link>
      </nav>

    </header>
  );
}
