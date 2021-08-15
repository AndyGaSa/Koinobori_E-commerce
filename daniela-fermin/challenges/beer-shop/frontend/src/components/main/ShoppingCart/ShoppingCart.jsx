import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { payCart } from '../../../redux/actions/action.Creator';
import actionTypes from '../../../redux/actions/actionTypes';

import './ShoppingCart.scss';

export default function ShoppingCart() {
  const beersInCart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function addToCart(beer) {
    const newBeer = { ...beer, amount: 1 };
    dispatch({
      type: actionTypes.PUT_IN_CART,
      newBeer
    });
  }
  function decreaseAmount(beer) {
    const newBeer = { ...beer, amount: 1 };
    dispatch({
      type: actionTypes.DECREASE_AMOUNT,
      newBeer
    });
  }

  return (
    <div className="main__shoppingCart">
      <h2>Shopping Cart</h2>
      <ul>
        {beersInCart?.map((beer) => (
          <li>

            <span className="beerName">{beer?.name}</span>
            <span className="beerPrice">{beer?.price}</span>
            <button
              className="beerButton"
              onClick={() => { decreaseAmount(beer); }}
              type="button"
            >
              -

            </button>
            <input
              placeholder={beer?.amount}
              type="text"
            />
            <button
              onClick={() => { addToCart(beer); }}
              type="button"
            >
              +

            </button>

          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          const cartData = {
            user: '611920405201d36ea8e46e68',
            products: beersInCart
          };
          payCart(cartData);
        }}
      >
        Pay

      </button>
    </div>
  );
}
