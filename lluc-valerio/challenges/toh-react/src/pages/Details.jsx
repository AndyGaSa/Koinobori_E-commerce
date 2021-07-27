/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Details({ match }) {
  const [heroId] = useState(match.params.heroId);
  //   const heroes = [
  //     { id: 11, name: 'Dr Nice' },
  //     { id: 12, name: 'Narco' },
  //     { id: 13, name: 'Bombasto' },
  //     { id: 14, name: 'Celeritas' },
  //     { id: 15, name: 'Magneta' },
  //     { id: 16, name: 'RubberMan' },
  //     { id: 17, name: 'Dynama' },
  //     { id: 18, name: 'Dr IQ' },
  //     { id: 19, name: 'Magma' },
  //     { id: 20, name: 'Tornado' }
  //   ];
  return (
    <div>

      {/* document.getElementById('hero__title').innerHTML = this.hero?.name;
    document.getElementById('hero__id').innerHTML = this.hero?.id;
    document.getElementById('hero__name').value = this.hero?.name; */}
      {/* } */}

      <h2>
        <span id={heroId.id} />
        {heroId.id}
        details!
      </h2>

      <div>
        <label htmlFor="hero__name">
          name:
          <input type="text" id="hero__name" />
        </label>
      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
    // <div>
    //     <h2><span id={heroId.id}></span> details!</h2>
    //     <div><span>id: </span><span id="hero__id"></span></div>

  // </div>
  );
}
