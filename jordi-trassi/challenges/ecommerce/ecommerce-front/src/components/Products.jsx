/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/actions/actionCrators';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <ul>
      {products.map((product) => <li key={product.name}>{product.name}</li>)}
    </ul>
  );
}
