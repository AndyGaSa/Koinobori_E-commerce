/* eslint-disable import/order */
import React from 'react';
import logo from './sonary.svg';
import './Footer.scss';
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <figure className="footer__sonary">
        <a className="sonary__anchor" href="/dashboard">
          <img className="sonary__icon" alt="sonary icon" src={logo} />
        </a>
      </figure>
      <div className="fotter__info">
        <section className="info__icons">
          <FaInstagramSquare />
          <FaFacebook />
          <FaTwitterSquare />
        </section>
        <span> &copy; Team sonary</span>

      </div>
    </footer>
  );
}
