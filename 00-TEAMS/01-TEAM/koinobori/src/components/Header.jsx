import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const stockList = useSelector((store) => store.stock);
  console.log(stockList);
  return (
    <Header>
      <div className="header__upper">
        <div className="header__lower">
          <nav className="header__lower__nav-icons">

            <img src="" alt="" />

            <Link to="/details/tshirts">
              <img src={stockList?.resources?.logo} alt="tshirts" />
            </Link>

            <Link to="/details/jumpers">
              <img src="" alt="jumpers" />
            </Link>

            <Link to="/details/shorts">
              <img src="" alt="shorts" />
            </Link>

            <Link to="/details/hats">
              <img src="" alt="hats" />
            </Link>

            <Link to="/cart">
              <img src="" alt="cart" />
            </Link>

          </nav>
        </div>
      </div>

      <p>{stockList?.clothes?.accessories[0]?.name || 'hola'}</p>
      <p>Hola soy el headers</p>
    </Header>
  );
}
