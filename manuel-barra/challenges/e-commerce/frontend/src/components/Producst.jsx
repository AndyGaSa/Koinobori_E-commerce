/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/actions/actionCreators';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <ul>
      {products.map(({
        name, image, price, stock
      }) => (
        <li key={name}>
          <h2>{name}</h2>
          <img src={image} alt="jugador" />
          <h3>{price}</h3>
          <p>{stock}</p>
        </li>
      ))}
    </ul>
  );
}
