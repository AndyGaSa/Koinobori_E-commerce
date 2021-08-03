import React, { useState } from 'react';

import './Faq.css';

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Faq">
      <div className="Faq__accordeon">
        <div onClick={() => setIsOpen(!isOpen)} className="accordeon-header">
          <h3>¿Por qué usar Child Connect?</h3>
          <p className="accordion-indicator">
            {isOpen ? '+' : '-'}
          </p>
        </div>
        {isOpen && (
        <div className="accordeon-body">
          Child Connect es una aplicación que te permitirá contactar con otras familias de tu
          barrio. Podrás ofrecer eventos o participar  de eventos generados por familias
          vecinas, a los cuales asistir con tus hijos. Podrás generar vínculos con otras
          familias del barrio.
        </div>
        )}
      </div>
    </div>
  );
}

/*

{
  return (
    <>

          <p>
            Child Connect es una aplicación que te permitirá contactar con otras familias de tu
            barrio. Podrás ofrecer eventos o participar  de eventos generados por familias
            vecinas, a los cuales asistir con tus hijos. Podrás generar vínculos con otras
            familias del barrio.
          </p>
        </div>
¿Qué tipo de eventos encontrarás en Child Connect?

          <p>
            Los eventos pueden ser muy variados, y serán gratuitos. Puedes ofrecer o asistir
            a eventos de paseos por el parque, partidos de football, encuentros de danza o
            música, teatro, cocina o juegos de mesa en casa, y todos los que se te ocurran!
          </p>

        ¿Por qué debo crear un perfil de usuario en Child Connect?

          <p>
            Para que las familias puedan conocerte, conocer las edades e intereses de tus hijos,
            y así coordinar encuentros que puedan disfurtar en familia.
            Una vez que cuentes con tu perfil podrás apuntarte u ofrecer eventos.
          </p>

    </>
  );
} */
