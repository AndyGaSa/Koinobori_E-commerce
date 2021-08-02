import React from 'react';

import Event from '../components/Event';

export default function EventList() {
  return (
    <>
      <h2>Lista de Eventos en tu barrio</h2>
      <section>
        <Event />
      </section>
      <nav>
        <button type="button">Siguiente</button>
        <button type="button">Anterior</button>
      </nav>
    </>
  );
}
