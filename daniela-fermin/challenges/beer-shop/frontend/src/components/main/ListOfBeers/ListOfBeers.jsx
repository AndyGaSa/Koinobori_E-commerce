import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { loadBeers } from '../../../redux/actions/action.Creator';

export default function ListOfBeers() {
  const beers = useSelector((store) => store.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBeers());
  },
  []);

  return (
    <>
      <h2>Our Beers</h2>
      <ul>
        {beers.map((beer) => {
          <li>
            <span>{beer.name}</span>
            <span>{beer.price}</span>
            <button type="button">Add</button>
          </li>;
        })}
      </ul>

    </>
  );
}
