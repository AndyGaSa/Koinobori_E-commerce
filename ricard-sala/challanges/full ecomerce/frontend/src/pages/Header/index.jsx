import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <h2>E-COMERCE RIKI</h2>
      <nav>
        <Link to="/dasboard">Products</Link>
        <Link to="/cart">User cart</Link>
        <Link to="/user">User</Link>
      </nav>
    </>
  );
}
