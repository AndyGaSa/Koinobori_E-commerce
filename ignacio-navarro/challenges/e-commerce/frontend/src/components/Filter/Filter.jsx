import React from 'react';
import './Filter.scss';

export default function Filter() {
  return (
    <aside>
      <span>Beer types:</span>
      <select name="beerTypes" id="beerTypes">
        <option value="All">All</option>
        <option value="Blonde">Blonde</option>
        <option value="Ipa">Ipa</option>
        <option value="Black">Black</option>
        <option value="Bitter">Bitter</option>
      </select>
      <span>Price:</span>
      <select name="beerPrice" id="beerPrice">
        <option value="All">All</option>
        <option value="Cheap">Cheap</option>
        <option value="Average">Average</option>
        <option value="Expensive">Expensive</option>
      </select>
      <span>Alcohol:</span>
      <select name="Alcohol" id="Alcohol">
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </aside>
  );
}
