import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { loadBeers } from '../../../redux/actions/action.Creator';
import actionTypes from '../../../redux/actions/actionTypes';

import './ListOfBeers.scss';

export default function ListOfBeers() {
  const beers = useSelector((store) => store.beers);
  const dispatch = useDispatch();
  const beersShort = beers.slice(0, 9);

  useEffect(() => {
    dispatch(loadBeers());
  }, []);

  function addToCart(beer) {
    const newBeer = { ...beer, amount: 1 };
    dispatch({
      type: actionTypes.PUT_IN_CART,
      newBeer
    });
  }

  return (
    <div className="main__listBeers">
      <h2>Our Beers</h2>
      <ul>
        {beersShort.map((beer) => (
          <li>
            <span className="beerName">{beer.name}</span>
            <span className="beerPrice">{beer.price}</span>
            <button
              className="beerAdd"
              type="button"
              onClick={() => addToCart(beer)}
            >
              Add

            </button>
          </li>
        ))}

      </ul>

    </div>
  );
}
