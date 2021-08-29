import React from 'react';
import { useSelector } from 'react-redux';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import '../styles/Header.css';

export default function Header() {
  const { user, isAuthorized } = useSelector((store) => store.loginStatus);
  return (
    <header className="header">
      <div className="header__user-info">
        {
          (isAuthorized)
            ? (
              <div className="user-info__text">
                Name:
                {' '}
                {user.name}
                <br />
                email:
                {' '}
                {user.email}
                <img src={user.picture} alt={user.name} />
              </div>
            )
            : (<div>no user data</div>)
          }
      </div>
      <div className="header__login">
        <LoginButton />
        <LogoutButton />
      </div>
    </header>
  );
}
