import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>

        <div className="footer-terms-list">
          <p className="footer-terms-list__headline">Child Connect</p>
          <ul>
            <li className="footer-terms-list_item">¿Cómo funciona?</li>
            <li className="footer-terms-list_item">Ayuda</li>
            <li className="footer-terms-list_item">Privacidad</li>
            <li className="footer-terms-list_item">Términos</li>
            <li className="footer-terms-list_item">Datos de la empresa</li>
          </ul>
        </div>

        <div className="header-logo-section">
          <div className="header-logo-section_logo">
            <img src="https://i.ibb.co/C7MLvRN/Child-Connect-3.png" alt="Logo" />
          </div>
          <span className="header-logo-section__copyright">© 2021 Child Connect | All rights reserved</span>
        </div>

        <div className="header-social-network__icons">
          <img src="https://i.ibb.co/q19wwTs/insta.png" alt="Instagram" />
          <img src="https://i.ibb.co/F4VzVJy/whatsapp.png" alt="Whatsapp" />
          <img src="https://i.ibb.co/54NXxmN/tel.png" alt="Tel" />
          <img src="https://i.ibb.co/rmMhqY5/twitter.png" alt="Twitter" />
          <img src="https://i.ibb.co/L5WSKp7/facebook.png" alt="Facebook" />
        </div>

      </footer>
    </>
  );
}
