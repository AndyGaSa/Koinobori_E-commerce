import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Profile from './Profile';
import LogoutButton from './LogoutButton';

import('../styles/global.scss');
import('../styles/header.scss');

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      {isAuthenticated
        ? (
          <nav className="header__navigator">
            <LogoutButton />
            <Profile />
          </nav>
        )

        : <LoginButton className="header__logIn" />}
      <h1>La Tiendecita</h1>
    </header>

  );
}
