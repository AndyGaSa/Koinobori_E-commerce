/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React from 'react';
import './Event.css';

const Event = ({ data }) => {
  console.log(data);
  return (
    <>
      <article className="eventList__event">
        <header className="event__header">
          <h3>{data.title}</h3>
          <section>
            <img src="https://i.ibb.co/G3B81Bh/pin-1.png" alt="pin-icon" />
            <p>Barcelona City</p>
          </section>
          <section>
            <img src="https://i.ibb.co/hBwg4PJ/calender-4021509-640.png" alt="calendar-icon" />
            <p>{data.fecha}</p>
          </section>
          <section>
            <img src="https://i.ibb.co/Jcm9rR1/flat-2442462-640.png" alt="clock-icon" />
            <p>
              {data.hora}
              h
            </p>
          </section>
        </header>
        <section className="event__info">
          <div>
            <img src="" alt="" />
            <p>{data.activity}</p>
          </div>
          <div>
            <div>{data.max_childs}</div>
            <p>Niños</p>
          </div>
        </section>
        <p className="event__description">{data.description}</p>
        <footer className="event__more-btn">
          <button type="button">Saber más</button>
        </footer>
      </article>
    </>
  );
};
export default Event;
