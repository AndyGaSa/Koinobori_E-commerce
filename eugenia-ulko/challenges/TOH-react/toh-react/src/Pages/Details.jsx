import React from 'react';
import './Details.css';

export default function Details() {
  /* {match} const [heroId] = useState(match.params.heroId); */
  return (
    <>
      <div>
        <h2>Mr Nice Details</h2>
        <div>
          <span>id: </span>
          heroId
        </div>
        <div>
          <label htmlFor="hero-name">
            {' '}
            Hero name:
            <input id="hero-name" placeholder="Hero name" />
          </label>
        </div>
        <button type="button">go back</button>
        <button type="button">save</button>
      </div>
      <h3>Magneta details</h3>
      <p>id: 15</p>
      <p>Magneta</p>

    </>
  );
}
