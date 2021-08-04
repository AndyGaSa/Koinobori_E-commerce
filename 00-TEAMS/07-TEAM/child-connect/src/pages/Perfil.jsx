/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import EventList from './EventList';

import './Perfil.css';

export default function Perfil() {
  const currentEvents = useSelector(({ events }) => events);

  console.log(currentEvents);
  return (
    <>

      <header>
        <h2>Nombre del Usuario</h2>
        <section>
          <img src="#" alt="Imagen de perfil de Usuario" />
          <div>
            {/* info de la api */}
          </div>
        </section>
      </header>
      <h3>Descripción Personal:</h3>
      <p> </p>
      <EventList />
      <p>{currentEvents[0]?.title}</p>

    </>

  );
}
