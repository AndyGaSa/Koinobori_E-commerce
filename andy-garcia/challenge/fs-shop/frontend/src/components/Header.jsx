import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './Header.css';

function Header() {
  return (

    <header>
      <LogoutButton />
      <Link to="/favsites">
        <img src="https://i.ibb.co/XDqMsVN/pngegg.png" alt="link to favorites" />
      </Link>
    </header>
  );
}

export default Header;
