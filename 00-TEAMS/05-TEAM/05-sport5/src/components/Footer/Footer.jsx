import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <nav className="footer">
        <button type="button" className="footer__navigation-home-button">
          <i className="fas fa-home" />
        </button>
        <button type="button" className="footer__navigation-backpage-button">
          <i className="fas fa-chevron-left" />
        </button>
        <button type="button" className="footer__navigation-profile-button">
          <i className="fas fa-user" />
        </button>

      </nav>
    </footer>
  );
}
