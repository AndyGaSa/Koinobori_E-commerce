/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadProducts from '../redux/actions/creators/products';
import addToCart from '../redux/actions/creators/addToCart';

import('../styles/funkoList.scss');

export default function FunkoList() {
  const { availableProducts } = useSelector(({ products }) => ({
    stocks: products.map(({ stock }) => stock),
    availableProducts: products
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  function destructureProduct(product) {
    const newProduct = {
      product: product._id,
      amount: 1,
      types: 'ADD_TO_CART'
    };
    return newProduct;
  }
  return (
    <section className="products">
      <h1>Funko selection:</h1>
      <ul className="products__list">
        {availableProducts.map((product) => (
          <li key={`${product._id}`}>
            <img src={product.img} alt="" />
            {`${product.model}`}
            <span>{`${product.price}€`}</span>
            {product.stock === 0
              ? <span>Sold Out</span>
              : (
                <>
                  <span>
                    {` Stock: ${product.stock}`}
                  </span>
                  <button type="button" onClick={() => dispatch(addToCart(destructureProduct(product)))}>Add</button>
                </>
              )}
          </li>
        ))}
      </ul>
    </section>
  );
}
