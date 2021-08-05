import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Favorites from './Favorites';
import UserProfile from './UserProfile';

export default function Profile() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated
      ? (
        <main>
          <h1>Profile</h1>
          <UserProfile />
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
