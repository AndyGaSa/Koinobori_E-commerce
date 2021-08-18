import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  function setNavButtons() {
    switch (window.location.pathname) {
      case '/Adversaries':
        return (
          <>
            <Link to="../Friends">
              Friends
            </Link>
            <Link to="../">
              Main
            </Link>
          </>
        );
      case '/Friends':
        return (
          <>
            <Link to="../Adversaries">
              Adversaries
            </Link>
            <Link to="../">
              Main
            </Link>
          </>
        );
      default:
        return (
          <>
            <Link to="../Friends">
              Friends
            </Link>
            <Link to="../Adversaries">
              Adversaries
            </Link>
          </>
        );
    }
  }

  return (
    setNavButtons()
  );
}
