/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadProducts from '../redux/actions/creators/products';
import addToCart from '../redux/actions/creators/cart';

export default function FunkoList() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  function destructureProduct(product) {
    const { _id, ...newProduct } = product;
    return newProduct;
  }

  return (
    <>
      <h1>Funko selection:</h1>
      <ul>
        {products.map((product) => (
          <li key={`${product._id}`}>
            {`${product.model}: ${product.price}€`}
            {' '}
            <button type="button" onClick={() => dispatch(addToCart(destructureProduct(product)))}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}
