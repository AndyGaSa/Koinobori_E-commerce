import React from 'react';
// import Map from 'Map';

const EventDetails = () => (
  <>
    <nav>
      <button type="button">Volver</button>
      <section>
        <img src="" alt="User-avatar" />
        <h3 data-testid="userName-h3">Nombre Usuario</h3>
      </section>
      <button type="button">Me apunto</button>
    </nav>
    <header>
      <section>
        <img src="" alt="Type-icon" />
        <h2>Titulo Evento</h2>
      </section>
      <section>
        <p>Fecha - Hora</p>
        <p>Localizacion</p>
      </section>
    </header>
    <p>
      <h3>Descripcion:</h3>
      <h4>Plazas disponibles: ¿?</h4>
      Descripcion de prueba.
    </p>
    {/* <Map /> */}
  </>
);

export default EventDetails;
