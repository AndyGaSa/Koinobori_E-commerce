import React from 'react';
import './header.input.scss';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './sonary.svg';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <nav className="header__top">
        <figure clasName="header__sonary">
          <a className="sonary__icon" href="/dashboard">
            <img className="sonary__icon" alt="sonary icon" src={logo} />
          </a>
        </figure>
        <figure className="header__profile">
          <a className="profile__anchor" href="/profile">
            <img className="profile__icon" alt="profile icon" />
          </a>
        </figure>
        { isAuthenticated
          ? <LogoutButton />
          : <LoginButton />}
      </nav>
      <div className="header__bottom" />

    </header>
  );
}
