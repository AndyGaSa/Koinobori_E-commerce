/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadCart from '../redux/actions/creators/loadCart';
import addToCart from '../redux/actions/creators/addToCart';

import('../styles/Cart.scss');

export default function Cart() {
  const carts = useSelector((store) => store.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  function deleteProduct(product) {
    const newProduct = {
      product: product._id,
      amount: 1,
      types: 'DELETE_FROM_CART'
    };
    return newProduct;
  }

  function addProduct(product) {
    const newProduct = {
      product: product._id,
      amount: 1,
      types: 'ADD_TO_CART'
    };
    return newProduct;
  }
  return (
    <section className="cart">
      <h2>Cart:</h2>
      <ul className="cart__list">
        {carts.map((currentCart) => currentCart.products?.map(
          ({ product, amount }) => (

            <li key={product?.model} className="cart__item">
              {product?.model}
              {' '}
              <span>
                <button type="button" onClick={() => dispatch(addToCart(deleteProduct(product)))}>-</button>
                {' '}
                {amount}
                {' '}
                {product.stock > 0
                  ? <button type="button" onClick={() => dispatch(addToCart(addProduct(product)))}>+</button>
                  : null}
              </span>
            </li>
          )
        ))}
      </ul>
    </section>
  );
}
