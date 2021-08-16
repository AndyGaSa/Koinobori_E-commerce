/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRandomBeer } from '../redux/actions/actionCreator';

import './randomBeer.css';

export default function RandomBeer() {
  const dispatch = useDispatch();
  const beer = useSelector(({ randomBeer }) => randomBeer);

  useEffect(() => {
    dispatch(loadRandomBeer());
  }, []);

  return (
    <header>
      <h2>Random beer</h2>
      { beer
        && (
        <div className="container">
          <div className="container__image">
            <img src={beer.image_url} alt={beer.name} />
          </div>

          <div className="container__feature">
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
            <button type="button">Random Beer</button>
            <br />
            <button type="button">
              Random Non
              <br />
              Alconholic Beer
            </button>
          </div>
        </div>
        )}

      <hr />
    </header>
  );
}
