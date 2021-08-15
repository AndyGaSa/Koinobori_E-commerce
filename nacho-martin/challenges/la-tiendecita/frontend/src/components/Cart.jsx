/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadCart from '../redux/actions/creators/loadCart';

export default function Cart() {
  const carts = useSelector((store) => store.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);
  return (
    <>
      <h2>Cart:</h2>
      <ul>
        {carts.map((currentCart) => currentCart.products?.map(
          ({ product, amount }) => (

            <li key={product?.model}>
              {product?.model}
              {' '}
              <span>
                <button type="button">-</button>
                {' '}
                {amount}
                {' '}
                <button type="button">-</button>
              </span>
            </li>
          )
        ))}
      </ul>
    </>
  );
}
