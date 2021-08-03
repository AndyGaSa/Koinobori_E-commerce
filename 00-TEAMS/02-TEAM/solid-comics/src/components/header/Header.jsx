import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="profile" className="nav-profile">
          <span className="nav-profile__text">Profile</span>
          <img className="nav-profile__img" src="https://i.ibb.co/YLZR3hF/jarvis.png" alt="Profile" />
        </Link>
        <Link to="comic-list" className="nav-comics">
          <span className="nav-comics__text">Comics</span>
          <img className="nav-comics__img" src="https://i.ibb.co/mh9w0nC/comics.jpg" alt="Comics" />

        </Link>
        <Link to="battle" className="nav-battle">
          <span className="nav-battle__text">Battle</span>
          <img className="nav-battle__img" src="https://i.ibb.co/xDHnz2m/battle.jpg" alt="Battle" />

        </Link>
        <Link to="log-out" className="nav-logout">
          <span className="nav-logout__text">LogOut</span>
          <img className="nav-logout__img" src="https://i.ibb.co/vLGB8Sm/logOut.jpg" alt="Log Out" />
        </Link>
      </nav>
    </header>
  );
}
