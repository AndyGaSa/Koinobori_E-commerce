import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Profile from '../Profile/Profile';

import getUser from '../../redux/actions/users.creator';
import './header.scss';

function Header() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      const userData = {
        name: user.name,
        email: user.email
      };
      dispatch(getUser(userData));
    }
  }, [isAuthenticated]);

  return (
    <header className="header">
      <h1 data-testid="page-title" className="header__title">shoeShop</h1>
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
