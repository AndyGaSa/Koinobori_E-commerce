/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import Profile from '../Profile/Profile';
import './Footer.scss';

export default function Footer() {
  const { isAuthenticated } = useAuth0();

  return (
    <footer>
      <nav className="footer">
        <button type="button" className="footer__navigation-home-button" data-testid="button-home">
          <i className="fas fa-home" />
        </button>
        <button type="button" className="footer__navigation-backpage-button" data-testid="button-back">
          <i className="fas fa-chevron-left" />
        </button>
        { !isAuthenticated ? <LoginButton /> : <Profile /> }
      </nav>
    </footer>
  );
}
