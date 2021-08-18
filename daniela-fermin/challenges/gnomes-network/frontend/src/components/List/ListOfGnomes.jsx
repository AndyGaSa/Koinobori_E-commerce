/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { loadGnomes } from '../../redux/actions/actions.creator';

export default function ListOfGnomes() {
  const gnomes = useSelector((store) => store.gnomes);
  const dispatch = useDispatch();

  const [filteredGnomes, setFilterGnomes] = useState();
  useEffect(() => {
    if (!gnomes.length) dispatch(loadGnomes());
  }, []);

  useEffect(() => {
    setFilterGnomes(gnomes || []);
  }, [gnomes]);

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
                      <Link to={`/details/${gnome._id}`}>
                        <span>{gnome.name}</span>
                      </Link>
                    </li>
                  ))
              }
        </ul>
      </div>
    </main>
  );
}
