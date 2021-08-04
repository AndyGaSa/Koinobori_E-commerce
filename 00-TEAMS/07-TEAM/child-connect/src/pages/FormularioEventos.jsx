import React from 'react';

export default function FormularioEventos() {
  return (
    <>
      <header>
        <h2>Crea un evento para ofrecer en tu barrio</h2>
        <p>Completa todos los campos</p>
      </header>
      <form>
        <label htmlFor="evento_titulo">
          Titulo del Evento:
          <input name="event_title" placeholder="Baile en casa" />
        </label>
        <label htmlFor="evento_fecha">
          Dia:
          <select name="event_day" id="event_day">
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
          <select name="event_hour" id="event_hour">
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
          <select name="event_type" id="event_type">
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
          <textarea placeholder="Describe en qué consiste el evento, cuantas personas participarán, qué elementos brindarás y cuáles debe traer cada niña/o, y toda la información que creas relevante." />
        </label>
        <label htmlFor="event_max-child">
          Palzas disponibles:
          <select name="event_max-child" id="event_max-child">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button type="button">Añadir Evento</button>
      </form>
    </>
  );
}
