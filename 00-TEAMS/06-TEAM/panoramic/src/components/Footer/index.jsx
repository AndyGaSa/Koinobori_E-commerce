import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export default function Footer() {
  return (

    <>
      <div className="main-footer-container">
        <nav>
          <ul className="main-footer-container__socialmedia">
            <li className="socialmedia__facebook" />
            <li className="socialmedia__youtube" />
            <li className="socialmedia__twitter" />
            <li className="socialmedia__soundcloud" />
            <li className="socialmedia__instagram" data-testid="instagram-icon" />
            <li className="socialmedia__pinterest" />
          </ul>
        </nav>
        <form className="main-container__contact-form">
          <h3>Contact Us:</h3>
          <div className="name-input">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Adress" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Let Us To Know How Can We Help" />
          <button type="submit" data-testid="submit-button">Submit</button>
        </form>

      </div>
      <div className="bot-container">
        <span>Panoramic 2021 © Made with ♡ by Manu, Pau and Alex</span>
      </div>
    </>
  );
}
