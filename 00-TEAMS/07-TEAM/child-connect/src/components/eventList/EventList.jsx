/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllEvents } from '../../redux/actions';
import Event from '../event/Event';
import './EventList.css';

const EventList = () => {
  const currentEvents = useSelector(({ events }) => events);
  // currentEvents = currentEvents.slice(0, 11);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);

  return (
    <div className="eventList-container">
      <h2>Lista de Eventos en tu barrio</h2>
      <section className="eventList">
        {currentEvents && (
          <>
            {
              currentEvents.map((event) => <Event eventId={event.id} data={event} />)
            }
          </>
        )}
      </section>
      {/* <nav className="event-pagination">
        <button className="event-pagination__anterior" type="button">Anterior</button>
        <button className="event-pagination__siguiente" type="button">Siguiente</button>
      </nav> */}
    </div>
  );
};

export default EventList;
