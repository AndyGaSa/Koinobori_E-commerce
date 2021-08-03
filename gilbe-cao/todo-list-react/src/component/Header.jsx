/* eslint-disable react/prop-types */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <h1>ToDo List</h1>
      { isAuthenticated
        ? <LogoutButton />
        : <LoginButton />}
      <hr />
      <Profile />
    </header>
  );
}
