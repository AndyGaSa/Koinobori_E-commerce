import React from 'react';
import Accordion from './Accordion';

const Faq = () => {
//   const faqInfo = [
//     {
//       id: 0,
//       title: '¿Por qué usar Child Connect?',
//       body:
//       'Child Connect es una aplicación que te permitirá contactar con otras familias de tu barrio. Podrás ofrecer eventos o participar  de eventos generados por familias vecinas, a los cuales asistir con tus hijos. Podrás generar vínculos con otras familias del barrio.'
//     },
//     {
//       id: 1,
//       title: '¿Qué tipo de eventos encontrarás en Child Connect?',
//       body:
//       'Los eventos pueden ser muy variados, y serán gratuitos. Puedes ofrecer o asistir a eventos de paseos por el parque, partidos de football, encuentros de danza o música, teatro, cocina o juegos de mesa en casa, y todos los que se te ocurran!'
//     },
//     {
//       id: 2,
//       title: '¿Por qué debo crear un perfil de usuario en Child Connect?',
//       body:
//       'Para que las familias puedan conocerte, conocer las edades e intereses de tus hijos, y así coordinar encuentros que puedan disfurtar en familia. Una vez que cuentes con tu perfil podrás apuntarte u ofrecer eventos.'
//     },
//     {
//       id: 3,
//       title: '¿Quiénes han creado Child Connect?',
//       body:
//       'Un equipo de personas inteligentes, bellas y sensibles que quieren hacer de éste un mundo mejor aportando su granito de arena en su trabajo cotidiano.'
//     }
//   ];
  return (
    <section className="Faq">

      {currentFaqs && (
        <>
        {
              currentFaqs.map((faq) => 
              <Accordion 
              key={faq.id} 
              title={faq.title}
              body={faq.body}
            />
      )}      
</>)
};
    </section>
  );


export default Faq;
