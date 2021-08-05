import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>

        <div className="footer-terms">
          <div className="footer-terms-block">
            <p className="footer-terms-list__headline">Child Connect</p>
            <ul>
              <li className="footer-terms-list_item">¿Cómo funciona?</li>
              <li className="footer-terms-list_item">Ayuda</li>
              <li className="footer-terms-list_item">Privacidad</li>
              <li className="footer-terms-list_item">Términos</li>
              <li className="footer-terms-list_item">Datos de la empresa</li>
            </ul>
          </div>
        </div>

        <div className="header-logo-section">
          <div className="header-logo-section_logo">
            <img src="https://i.ibb.co/C7MLvRN/Child-Connect-3.png" alt="Logo" />
          </div>
          <span className="header-logo-section__copyright">© 2021 Child Connect | All rights reserved</span>
        </div>

        <div className="header-social-network__icons">
          <div className="social-network__item"><img src="https://i.ibb.co/q19wwTs/insta.png" alt="Instagram" /></div>
          <div className="social-network__item"><img src="https://i.ibb.co/F4VzVJy/whatsapp.png" alt="Whatsapp" /></div>
          <div className="social-network__item"><img src="https://i.ibb.co/54NXxmN/tel.png" alt="Tel" /></div>
          <div className="social-network__item"><img src="https://i.ibb.co/rmMhqY5/twitter.png" alt="Twitter" /></div>
          <div className="social-network__item1"><img src="" alt="" /></div>
        </div>

      </footer>
    </>
  );
}
