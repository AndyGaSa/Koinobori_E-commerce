import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Navs.scss';

export default function Header() {
  function setNavButtons() {
    switch (window.location.pathname) {
      case '/Adversaries':
        return (
          <nav className="nav">
            <Link to="../">
              Main
            </Link>
            <Link to="../Friends">
              Friends
            </Link>
          </nav>
        );
      case '/Friends':
        return (
          <nav className="nav">
            <Link to="../">
              Main
            </Link>
            <Link to="../Adversaries">
              Adversaries
            </Link>
          </nav>
        );
      default:
        return (
          <nav className="nav">
            <Link to="../Friends">
              Friends
            </Link>
            <Link to="../Adversaries">
              Adversaries
            </Link>
          </nav>
        );
    }
  }

  return (
    setNavButtons()
  );
}
