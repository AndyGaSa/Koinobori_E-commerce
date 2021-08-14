import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Profile from '../Profile/Profile';

import './header.scss';

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <h1 className="header__title">shoeShop</h1>
      <div className="header__login-logout">
        {isAuthenticated
          ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          )
          : <LoginButton />}
      </div>
    </header>
  );
}

export default Header;
