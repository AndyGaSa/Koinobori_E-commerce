import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header() {
  return (
    <>
      <h2 className="title">E-COMERCE RIKI</h2>
      <nav className="nav-var">
        <Link to="/dasboard">Products</Link>
        <Link to="/cart">User cart</Link>
        <Link to="/user">User</Link>
      </nav>
    </>
  );
}
