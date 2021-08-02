import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <>
      <nav>
        <button type="button" className="header__navigation-menu">
          {' '}
          <i className="fas fa-bars" />
          {' '}
        </button>
        <h1 className="header__main-title">Sport5</h1>
      </nav>
    </>
  );
}
