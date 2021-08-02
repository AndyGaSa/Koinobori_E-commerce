import React from 'react';
import './Sports-Selector.css';

export default function SportSelector() {
  return (

    <nav className="sportSelector">

      <button type="button" className="sport-selector__navigation-menu">
        <i className="fas fa-futbol" />
      </button>

      <button type="button" className="sport-selector__navigation-menu">
        <i className="fas fa-basketball-ball" />
      </button>

      <button type="button" className="sport-selector__navigation-menu">
        <i className="fas fa-baseball-ball" />
      </button>

      <button type="button" className="sport-selector__navigation-menu">
        <i className="fas fa-football-ball" />
      </button>

      <button type="button" className="sport-selector__navigation-menu">
        <i className="far fa-futbol" />
      </button>

      <button type="button" className="sport-selector__navigation-menu">
        <i className="fas fa-hockey-puck" />
      </button>

      <button type="button" className="sport-selector__navigation-menu">
        Rugby aqui
      </button>

    </nav>

  );
}
