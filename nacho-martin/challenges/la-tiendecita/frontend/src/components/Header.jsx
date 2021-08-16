import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Profile from './Profile';
import LogoutButton from './LogoutButton';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      {isAuthenticated
        ? (
          <>
            <LogoutButton />
            <Profile />
          </>
        )

        : <LoginButton />}
    </header>
  );
}
