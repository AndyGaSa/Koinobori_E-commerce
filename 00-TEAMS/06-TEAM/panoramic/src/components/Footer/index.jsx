import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from './styles.css';

export default function Footer() {
  return (

    <>
      <div className="main-container">
        <nav>
          <ul className="main-container__socialmedia">
            <li className="socialmedia__facebook"><Link to="facebook.com">F</Link></li>
            <li className="socialmedia__instagram"><Link to="facebook.com">F</Link></li>
            <li className="socialmedia__twitter"><Link to="facebook.com">F</Link></li>
            <li className="socialmedia__souncloud"><Link to="facebook.com">F</Link></li>
            <li className="socialmedia__pinterest"><Link to="facebook.com">F</Link></li>
            <li className="socialmedia__youtube"><a href="www.facebook.com">A</a></li>
          </ul>
        </nav>
        <form className="main-container__contact-form">
          <h3>Contact Us</h3>
          <div className="name-input">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Adress" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Let Us To Know How Can We Help" />
          <button type="submit">Submit</button>
        </form>

      </div>
      <div className="bot-container">
        <span>Panoramic 2021 © Made with ♡ by Manu, Pau and Alex</span>
      </div>
    </>
  );
}
