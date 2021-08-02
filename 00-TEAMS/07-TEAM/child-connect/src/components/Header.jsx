import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src="https://drive.google.com/file/d/1hErhyLSEOwzR_QepMIxlAGwUGsa-EG6v/view?usp=sharing" alt="Child Connect Header Logo" />
          </Link>
          <section className="header__buttons">
            {/* <Link to="#" className="buttons__crear-evento">Crear Evento</Link> */}
            <div>
              {/* <Link to="#">Perfil</Link> */}
              {/* <Link to="#">Log Out</Link> */}
            </div>
          </section>
        </nav>
        <div>
          <h1>CHILD CONNECT, LA RED SOCIAL PARA LOS MÁS PEQUEÑOS.</h1>
        </div>
      </header>
    </>

  );
}
