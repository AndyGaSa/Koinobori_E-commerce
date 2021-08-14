import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
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
            >
              Add to cart
            </button>
          </li>
        ))
        }
      </ul>
    </>
  );
}
