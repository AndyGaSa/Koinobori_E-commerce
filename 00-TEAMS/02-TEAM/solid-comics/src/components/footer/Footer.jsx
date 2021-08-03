import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <a href="https://developer.marvel.com/">
        <small>Data provided by Marvel. © 2014 Marvel</small>
      </a>
      <nav className="socialLinks">
        <a href="https://twitter.com/home?lang=es">
          <img
            src="https://i.ibb.co/VVn6zrS/comic-cocial-media-0007-Capa-10.png"
            alt="comic-cocial-media-0007-Capa-10"
            border="0"
          />
        </a>
        <a href="https://www.instagram.com/?hl=es">
          <img
            src="https://i.ibb.co/zP5tZPf/comic-cocial-media-0004-Capa-7.png"
            alt="comic-cocial-media-0004-Capa-7"
            border="0"
          />
        </a>
        <a href="https://es-es.facebook.com/">
          <img
            src="https://i.ibb.co/3FC62ss/comic-cocial-media-0000-Capa-3.png"
            alt="comic-cocial-media-0000-Capa-3"
            border="0"
          />
        </a>
      </nav>
    </footer>
  );
}
