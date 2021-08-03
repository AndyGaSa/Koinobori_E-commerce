import React from 'react';
import EventList from './EventList';

export default function Perfil() {
  return (
    <>
      <header>
        <h2>Nombre del usuario</h2>
        <section>
          <img src="#" alt="avatar" />
          <div>Tabla de datos personales extraidos de JSON</div>
        </section>
      </header>
      <EventList />
    </>

  );
}
