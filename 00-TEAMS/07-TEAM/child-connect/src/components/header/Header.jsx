import React from 'react';
import {
  Link
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogOutButton from '../Auth0/LogOutButton';

import './Header.css';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header className="main-header">
        <div className="header-menu">
          {isAuthenticated && (
          <>
            <Link to="/dashboard" className="header-home__button">
              <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" width="213px" height="auto" alt="Child Connect Header Logo" />
            </Link>
          </>
          )}
          {!isAuthenticated && (
          <>
            <Link to="/" className="header-home-button">
              <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" width="213px" height="auto" alt="Child Connect Header Logo" />
            </Link>
          </>
          )}

          <nav className="header-nav__menu">
            <section className="header-menu__buttons">
              {isAuthenticated && (
              <>
                <Link to="/addevent" className="button-crear__evento">Crear Evento</Link>
                <div className="header-menu-buttons__buttons">
                  <Link to="/perfil" className="header-button__perfil">Perfil</Link>
                  <LogOutButton className="header-button__logout" />
                </div>
              </>
              )}
            </section>
          </nav>
        </div>
        <div className="header-title">
          <h1>CHILD CONNECT, la red social para conectar a los más pequeños.</h1>
        </div>

      </header>

    </>
  );
}
