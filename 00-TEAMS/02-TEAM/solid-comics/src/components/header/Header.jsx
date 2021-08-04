import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="../profile" className="nav-profile">
          <span className="nav-profile__text">Profile</span>
        </Link>
        <Link to="../comic-list" className="nav-comics">
          <span className="nav-comics__text">Comics</span>

        </Link>
        <Link to="../battle" className="nav-battle">
          <span className="nav-battle__text">Battle</span>

        </Link>
        <LogoutButton />
        {/* <Link to="../login" className="nav-logout">
          <span className="nav-logout__text">LogOut</span>
        </Link> */}
      </nav>
    </header>
  );
}
