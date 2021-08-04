/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Event from './Event';
import './EventList.css';

const EventList = () => {
  let currentEvents = useSelector(({ events }) => events);
  currentEvents = currentEvents.slice(0, 6);

  return (
    <>
      <h2>Lista de Eventos en tu barrio</h2>
      <section className="eventList">
        {currentEvents && (
          <>
            {
              currentEvents.map((event) => <Event key={event.id} data={event} />)
            }
          </>
        )}
      </section>
      <nav className="event-pagination">
        <button className="event-pagination__siguiente" type="button">Siguiente</button>
        <button className="event-pagination__anterior" type="button">Anterior</button>
      </nav>
    </>
  );
};

export default EventList;
