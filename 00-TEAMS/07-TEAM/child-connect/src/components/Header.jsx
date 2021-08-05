import React from 'react';
import {
  Link
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogOutButton from './Auth0/LogOutButton';

import './Header.css';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header className="main__header">
        <div className="header__menu">
          {isAuthenticated && (
          <>
            <Link to="/dashboard" className="header__home-button">
              <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" width="213px" height="auto" alt="Child Connect Header Logo" />
            </Link>
          </>
          )}
          {!isAuthenticated && (
          <>
            <Link to="/" className="header__home-button">
              <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" width="213px" height="auto" alt="Child Connect Header Logo" />
            </Link>
          </>
          )}

          <nav className="header__nav-menu">
            <section className="header__menu-buttons">
              {isAuthenticated && (
              <>
                <Link to="/addevent" className="button__crear-evento">Crear Evento</Link>
                <div className="header__menu_buttons--buttons">
                  <Link to="/perfil" className="header__button-perfil">Perfil</Link>
                  <LogOutButton className="header__button-logout" />
                </div>
              </>
              )}
            </section>
          </nav>
        </div>
        <div className="header__title">
          <h1>CHILD CONNECT, la red social para conectar a los más pequeños.</h1>
        </div>

      </header>

    </>
  );
}
