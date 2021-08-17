import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img-gnomos" src="https://image.freepik.com/vector-gratis/gnomo-navidad-dibujos-animados-lindo_125446-557.jpg" alt="Logo de Gnomos Net" />
      <h2 className="footer__title" data-testid="footer__title">Gnomos</h2>
    </footer>
  );
}
