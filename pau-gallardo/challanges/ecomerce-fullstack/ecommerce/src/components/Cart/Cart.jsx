import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeProductFromCart } from '../../redux/actions/cart.creator';

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.cartProducts);

  return (
    <>
      <h2>Esto es un carro</h2>
      <ul>
        {
        cartProducts.map((singleProduct) => (
          <li>
            <span>{`Product name ${singleProduct.name}`}</span>
            <span>{`${singleProduct.price}€}`}</span>
            <span>{`Stock ${singleProduct.stock} units`}</span>
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
    </>
  );
}
