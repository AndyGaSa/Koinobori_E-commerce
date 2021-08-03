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
          <Link to="/cart">
            <img className="cart" src={stockList?.resources?.cartIconPurple} alt="cart" />
          </Link>

        </nav>
      </div>
    </header>
  );
}
