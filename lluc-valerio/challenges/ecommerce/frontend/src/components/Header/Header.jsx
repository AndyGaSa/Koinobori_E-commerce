import React from 'react';

import User from '../User/User';

import '../../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">e-Commerce</h1>
      <User />
    </header>
  );
}
