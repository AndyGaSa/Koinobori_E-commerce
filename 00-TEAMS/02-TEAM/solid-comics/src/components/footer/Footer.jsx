import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__link" href="https://developer.marvel.com/">
        <small>
          Data provided by Marvel.
          {' '}
          <br />
          {' '}
          © 2014 Marvel
        </small>
      </a>
      <nav className="social-links">
        <a className="social-links__link" href="https://twitter.com/home?lang=es">
          <img
            className="social-links__image"
            src="https://i.ibb.co/VVn6zrS/comic-cocial-media-0007-Capa-10.png"
            alt="comic-cocial-media-0007-Capa-10"
            border="0"
          />
        </a>
        <a className="social-links__link" href="https://www.instagram.com/?hl=es">
          <img
            className="social-links__image"
            src="https://i.ibb.co/zP5tZPf/comic-cocial-media-0004-Capa-7.png"
            alt="comic-cocial-media-0004-Capa-7"
            border="0"
          />
        </a>
        <a className="social-links__link" href="https://es-es.facebook.com/">
          <img
            className="social-links__image"
            src="https://i.ibb.co/3FC62ss/comic-cocial-media-0000-Capa-3.png"
            alt="comic-cocial-media-0000-Capa-3"
            border="0"
          />
        </a>
      </nav>
    </footer>
  );
}
