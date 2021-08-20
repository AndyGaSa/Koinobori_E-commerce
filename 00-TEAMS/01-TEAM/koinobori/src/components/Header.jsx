/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';
import { useAuth0 } from '@auth0/auth0-react';
import LoginProfile from './LoginProfile';
import LoginImage from './LoginImage';
import LogoutImage from './LogoutImage';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  const stockList = useSelector((store) => store.stock);
  return (

    <header className="header">
      <section className="header__upper-container">
        <div className="scroll-container">
          <div className="upper-container__discount-text">FREE WORLDWIDE SHIPPING ON ORDERS OVER 90€&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE WORLDWIDE SHIPPING ON ORDERS OVER 90€</div>
        </div>
      </section>
      <nav className="header__lower__nav-icons">

        <Link to="/">
          <img className="header__logo" src={stockList?.resources?.logo} alt="tshirts" />
        </Link>
        <div className="header__blankspace" />
        <nav className="header__menu">
          <Link to="/category/tShirts">
            <img className="header__icons" src={stockList?.resources?.shirtsIcon} alt="jumpers" />
          </Link>

          <Link to="/category/hoodies">
            <img className="header__icons" src={stockList?.resources?.hoodiesIcon} alt="hoodies" />
          </Link>

          <Link to="/category/shorts">
            <img className="header__icons" src={stockList?.resources?.trousersIcon} alt="trousers" />
          </Link>

          <Link to="/category/accessories">
            <img className="header__icons" src={stockList?.resources?.accIcon} alt="hats" />
          </Link>
        </nav>
        <div className="header__blankspace" />

        <Link to="/" className="header__login">

          { isAuthenticated
            ? <LogoutImage />
            : <LoginImage />}
          <LoginProfile />
        </Link>
        <Link to="/cart">
          <img className="header__cart" src={stockList?.resources?.cartIconPurple} alt="cart" />
        </Link>

      </nav>
    </header>
  );
}
