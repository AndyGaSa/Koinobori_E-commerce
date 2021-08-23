import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="header">

      <img className="header__img-gnomos" src="https://image.freepik.com/vector-gratis/gnomo-navidad-dibujos-animados-lindo_125446-557.jpg" alt="Logo de Gnomos Net" />
      <div className="header__title-div">
        <h1 className="header__title" data-testid="header__title">Gnomos</h1>
        <p> the original Social Net</p>
      </div>

    </header>
  );
}
