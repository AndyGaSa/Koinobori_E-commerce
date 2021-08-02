import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from './styles.css';

export default function Footer() {
  return (

    <>
      <div className="main-container">
        <nav className="main-container__socialmedia">
          <ul>
            <li><Link to="facebook.com">F</Link></li>
            <li><Link to="facebook.com">F</Link></li>
            <li><Link to="facebook.com">F</Link></li>
            <li><Link to="facebook.com">F</Link></li>
            <li><Link to="facebook.com">F</Link></li>
            <li><a href="www.facebook.com">A</a></li>
          </ul>
        </nav>
        <div className="main-container__contact-form">
          <h1>Aqui va el formulario</h1>
        </div>

      </div>
      <div className="bot-container">
        <span>Panoramic 2021 © Made with ♡ by Manu, Pau and Alex</span>
      </div>
    </>
  );
}
