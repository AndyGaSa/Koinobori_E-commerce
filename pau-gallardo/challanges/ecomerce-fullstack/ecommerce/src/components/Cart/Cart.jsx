/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeProductFromCart, updateProductAmount } from '../../redux/actions/cart.creator';

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.cartProducts);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newTotalPrice = 0;
    cartProducts.forEach((product) => {
      newTotalPrice += product.amount * product.price;
    });
    setTotalPrice(newTotalPrice);
  }, [cartProducts]);

  function productQuantity(product, addOrSubstract, index) {
    switch (addOrSubstract) {
      case '+':
        if (product.amount < product.stock) {
          product.amount += 1;
        }
        break;

      case '-':
        if (product.amount > 0) {
          product.amount -= 1;
        }
        break;

      default:
        break;
    }
    dispatch(updateProductAmount(product, index));
  }

  return (
    <>
      <h2>Esto es un carro</h2>
      <ul>
        {
        cartProducts.map((singleProduct, index) => (
          <li>
            <span>{`Product name ${singleProduct.name}`}</span>
            <span>{`${singleProduct.price}€`}</span>
            <button type="button" onClick={() => productQuantity(singleProduct, '-', index)}>-</button>
            <span>{`Units ${singleProduct.amount}`}</span>
            <button type="button" onClick={() => productQuantity(singleProduct, '+', index)}>+</button>
            <button
              type="button"
              onClick={() => dispatch(removeProductFromCart(singleProduct))}
            >
              Remove from cart
            </button>
          </li>
        ))
        }
      </ul>
      <span>{`Total price: ${totalPrice}`}</span>
    </>
  );
}
