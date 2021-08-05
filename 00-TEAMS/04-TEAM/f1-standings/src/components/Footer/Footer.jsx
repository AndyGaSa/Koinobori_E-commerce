import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="test2" />
      <footer className="footer">
        <Link to="/constructorlist/">
          <button className="footer__constructor" type="button">
            {' '}
            <img className="img" src="https://image.flaticon.com/icons/png/512/842/842482.png" alt="" />
            {' '}
          </button>
        </Link>
        <Link to="/">
          <button className="footer__driver" type="button">
            {' '}
            <img className="img" src="https://image.flaticon.com/icons/png/512/3203/3203500.png" alt="" />
            {' '}
          </button>
        </Link>
        <Link to="/ChartContainer">
          <button className="footer__stats" type="button">
            {' '}
            <img className="img" src="https://image.flaticon.com/icons/png/512/1420/1420470.png" alt="" />
            {' '}
          </button>
        </Link>
      </footer>
    </>
  );
}
