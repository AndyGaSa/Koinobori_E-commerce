import React from 'react';
import './Faq.css';

function accordeon() {
  const myAccordeon = document.getElementsByClassName('Faq__accordeon');
  let item;

  for (item = 0; item < accordeon.length; item += 1) {
    myAccordeon[item].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
}

export default function Faq() {
  return (
    <>
      <section className="Faq__accordeon">
        <h2>Preguntas Frecuentes</h2>
        <button type="button" className="accordion__button">¿Por qué usar Child Connect?</button>
        <div className="accordion__div">
          <p>
            Child Connect es una aplicación que te permitirá contactar con otras familias de tu
            barrio. Podrás ofrecer eventos o participar  de eventos generados por familias
            vecinas, a los cuales asistir con tus hijos. Podrás generar vínculos con otras
            familias del barrio.
          </p>
        </div>
        <button type="button" className="accordion__button">¿Qué tipo de eventos encontrarás en Child Connect?</button>
        <div className="accordion__div">
          <p>
            Los eventos pueden ser muy variados, y serán gratuitos. Puedes ofrecer o asistir
            a eventos de paseos por el parque, partidos de football, encuentros de danza o
            música, teatro, cocina o juegos de mesa en casa, y todos los que se te ocurran!
          </p>
        </div>
        <button type="button" className="accordion__button">¿Por qué debo crear un perfil de usuario en Child Connect?</button>
        <div className="accordion__div">
          <p>
            Para que las familias puedan conocerte, conocer las edades e intereses de tus hijos,
            y así coordinar encuentros que puedan disfurtar en familia.
            Una vez que cuentes con tu perfil podrás apuntarte u ofrecer eventos.
          </p>
        </div>
      </section>
    </>
  );
}
