import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import loadGnomes from '../redux/actions/actions.creator';

export default function ListOfGnomes() {
  const gnomes = useSelector((store) => store.gnomes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGnomes());
  }, []);
  const [filteredGnomes, setFilterGnomes] = useState();
  function filterGnomes(searchTerm) {
    if (!searchTerm) setFilterGnomes(gnomes);
    else {
      const newGnomes = gnomes.filter(({ name, age }) => {
        const searchValues = [name, age];
        return searchValues.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilterGnomes(newGnomes);
    }
  }

  return (
    <main>
      <input
        type="search"
        placeholder="  Search for a gnome by name or age!"
        data-testid="search-input"
        onChange={(event) => filterGnomes(event.target.value)}
        className=""
      />
      <div>
        <ul>
          {
                  filteredGnomes && filteredGnomes.map((gnome) => (
                    <li>
                      <span>{gnome.name}</span>
                      <button type="button">Add to Friends</button>
                      <button type="button">Add to Adversaries</button>
                    </li>
                  ))
              }
        </ul>
      </div>
    </main>
  );
}
