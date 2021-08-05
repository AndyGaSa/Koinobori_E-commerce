/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <nav className="footer">
        <Link to="/countries/Soccer" className="footer__navigation-home-button" data-testid="button-home">
          <i className="fas fa-home" />
        </Link>
        <button type="button" className="footer__navigation-backpage-button" data-testid="button-back" onClick={useHistory().goBack}>
          <i className="fas fa-chevron-left" />
        </button>
        <button type="button" className="footer__navigation-profile-button" data-testid="button-profile">
          <i className="fas fa-user" />
        </button>

      </nav>
    </footer>
  );
}
