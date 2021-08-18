import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from '../LogoutButton';
import LoginButton from '../LoginButton';

import './Header.scss';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <Link to="/" className="header__logo-container">
        <img data-testid="main-logo-header" className="header__logo-item" src="https://i.ibb.co/SXY8TZG/LOGO-PANORAMIC-SOLO.png" alt="LOGO-PANORAMIC-SOLO" border="0" />
        <h1 className="header_title">Panoramic</h1>
      </Link>
      <nav className="header__navegation">
        { isAuthenticated
          ? <LogoutButton />
          : <LoginButton />}
        <Link className="header__navegation__link" to="/profile">Profile</Link>
        <Link className="header__navegation__link" to="/Favouritelist">♡ List</Link>
      </nav>
    </header>
  );
}
