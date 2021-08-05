import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Favorites from './Favorites';
import User from './User';
import './profile.scss';

export default function Profile() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated
      ? (
        <main className="profile">
          <User />
          <Favorites />
          <LogoutButton />
        </main>
      )
      : (
        <main>
          <LoginButton />
        </main>
      )
  );
}
