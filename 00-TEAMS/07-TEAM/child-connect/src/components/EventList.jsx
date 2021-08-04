/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Event from './Event';

const EventList = () => {
  const currentEvents = useSelector(({ events }) => events);
  console.log(currentEvents);

  return (
    <>
      {currentEvents && (
        <>
          <h2>Lista de Eventos en tu barrio</h2>
          <Event />
        </>
      )}
      <section />
      <nav>
        <button type="button">Siguiente</button>
        <button type="button">Anterior</button>
      </nav>
    </>
  );
};

export default EventList;
