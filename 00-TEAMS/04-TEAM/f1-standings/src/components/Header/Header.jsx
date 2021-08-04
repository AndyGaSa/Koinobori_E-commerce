import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="header__login" />
        <img className="header__f1" src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-5-3.png" alt="" />
        <button className="header__logout" type="button">
          {' '}
          <img className="logout__img" src="https://image.flaticon.com/icons/png/512/1023/1023655.png" alt="" />
          {' '}
        </button>
      </nav>
      <div className="test" />
    </>
  );
}
