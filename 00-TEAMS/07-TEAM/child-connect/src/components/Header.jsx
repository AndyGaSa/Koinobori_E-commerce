import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="header__home-button">
            <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" width="213px" height="auto" alt="Child Connect Header Logo" />
          </Link>
          <section>
            <Link to="/" className="buttons__crear-evento">Crear Evento</Link>
            <div className="header__buttons">
              <Link to="/">Perfil</Link>
              <Link to="/">Log Out</Link>
            </div>
          </section>
        </nav>
        <div>
          <h1>CHILD CONNECT, la red social para conectar a los más pequeños.</h1>
        </div>
      </header>
    </>

  );
}
