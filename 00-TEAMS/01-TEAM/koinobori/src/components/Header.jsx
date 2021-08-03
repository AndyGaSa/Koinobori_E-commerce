/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const stockList = useSelector((store) => store.stock);
  return (
    <header>
      <div className="header__upper">
        <p className="discount">FREE WORLDWIDE SHIPPING ON ORDERS OVER 90€</p>
      </div>
      <div className="header__lower">
        <nav className="header__lower__nav-icons">

          <Link to="/">
            <img className="logo" src={stockList?.resources?.logo} alt="tshirts" />
          </Link>
          <div className="menu">
            <Link to="/category/tShirts">
              <img className="icons" src={stockList?.resources?.shirtsIcon} alt="jumpers" />
            </Link>

            <Link to="/category/hoodies">
              <img className="icons" src={stockList?.resources?.hoodiesIcon} alt="hoodies" />
            </Link>

            <Link to="/category/shorts">
              <img className="icons" src={stockList?.resources?.trousersIcon} alt="trousers" />
            </Link>

            <Link to="/category/accessories">
              <img className="icons" src={stockList?.resources?.accIcon} alt="hats" />
            </Link>
          </div>

          <Link to="/login">
            <img className="login" src={stockList?.resources?.loginIcon} alt="login" />
          </Link>

          <Link to="/cart">
            <img className="cart" src={stockList?.resources?.cartIconPurple} alt="cart" />
          </Link>

          <div id="select-container">
            <ul>
              <li lang-selection="FR" tooltip="FR" flow="down">
                <img src="https://cdn.countryflags.com/thumbs/france/flag-800.png" alt="france flag" />
              </li>

              <li lang-selection="EN" tooltip="EN" flow="down" onClick="onSelect(this)">
                <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-800.png" alt="america flag" />
              </li>

              <li lang-selection="ES" tooltip="ES" flow="down" onClick="onSelect(this)">
                <img src="https://cdn.countryflags.com/thumbs/spain/flag-800.png" alt="spain flag" />
              </li>

              <li lang-selection="PT" tooltip="PT" flow="down" onClick="onSelect(this)">
                <img src="https://cdn.countryflags.com/thumbs/portugal/flag-800.png" alt="portugal flag" />
              </li>

              <li lang-selection="FR" tooltip="FR" flow="up" onClick="onSelect(this)">
                <img src="https://cdn.countryflags.com/thumbs/france/flag-800.png" alt="france flag" />
              </li>

              <li lang-selection="DE" tooltip="DE" flow="up" onClick="onSelect(this)">
                <img src="https://cdn.countryflags.com/thumbs/germany/flag-800.png" alt="germany flag" />
              </li>
            </ul>
          </div>

        </nav>
      </div>
    </header>
  );
}
