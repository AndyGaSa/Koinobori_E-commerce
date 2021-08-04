import React from 'react';
import {
  Link
} from 'react-router-dom';
import LogOutButton from './Auth0/LogOutButton';

import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div className="header__menu">
          <Link to="/" className="header__home-button">
            <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" width="213px" height="auto" alt="Child Connect Header Logo" />
          </Link>
          <nav>
            <section className="header__menu-buttons">
              <Link to="/" className="button__crear-evento">Crear Evento</Link>
              <div className="header__buttons">
                <Link to="/perfil" className="header__button-perfil">Perfil</Link>
                <LogOutButton className="header__button-logout">Log Out</LogOutButton>
              </div>
            </section>
          </nav>
        </div>
        <div>
          <h1>CHILD CONNECT, la red social para conectar a los más pequeños.</h1>
        </div>

      </header>

    </>
  );
}
