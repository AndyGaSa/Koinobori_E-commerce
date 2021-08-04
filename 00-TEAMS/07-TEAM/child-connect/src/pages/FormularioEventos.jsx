import React from 'react';
import './FormularioEventos.css';

export default function FormularioEventos() {
  return (
    <>
      <section className="event-form__header">
        <h2>Crea un evento para ofrecer en tu barrio</h2>
        <p>Completa todos los campos</p>
      </section>
      <form className="event-form__form">
        <label htmlFor="event_title">
          Titulo del Evento:
          <input name="event_title" placeholder="Baile en casa" className="event-form__input" />
        </label>
        <label htmlFor="event_place">
          Lugar:
          {' '}
          <img className="event-form__img" src="https://i.ibb.co/G3B81Bh/pin-1.png" alt="" />
          <input name="event_place" placeholder="Parque de la España Industrial" className="event-form__input" />
        </label>
        <label htmlFor="event_date">
          Dia:
          {' '}
          <img className="event-form__img" src="https://i.ibb.co/hBwg4PJ/calender-4021509-640.png" alt="" />
          <select name="event_date" id="event_date" className="event-form__selector">
            <option selected value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
          </select>
        </label>
        <label htmlFor="event_hour">
          Hora:
          {' '}
          <img className="event-form__img" src="https://i.ibb.co/Jcm9rR1/flat-2442462-640.png" alt="" />
          <select name="event_hour" id="event_hour" className="event-form__selector">
            <option selected value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
          </select>
        </label>
        <label htmlFor="event_type">
          Tipo de Evento:
          <select name="event_type" id="event_type" className="event-form__selector">
            <option selected value="sports">sports</option>
            <option value="coocking">cooking</option>
            <option value="dancing">dancing</option>
            <option value="cience">cience</option>
            <option value="music">music</option>
            <option value="theater">theater</option>
            <option value="puzzle">puzzle</option>
            <option value="console">console</option>
          </select>
        </label>
        <label htmlFor="event_description">
          Descripción del Evento:
          <textarea placeholder="Describe en qué consiste el evento, cuantas personas participarán, qué elementos brindarás y cuáles debe traer cada niña/o, y toda la información que creas relevante." className="event-form__textarea" />
        </label>
        <label htmlFor="event_max-child">
          Palzas disponibles:
          <select name="event_max-child" id="event_max-child" className="event-form__selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button type="button" className="event-form__button">Añadir Evento</button>
      </form>
    </>
  );
}
