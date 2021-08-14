/* eslint-disable no-param-reassign */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeProductFromCart } from '../../redux/actions/cart.creator';

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.cartProducts);
  const totalPrice = 0;
  // const [totalPrice, setTotalPrice] = useState(0);

  function productQuantity(product, addOrSubstract) {
    switch (addOrSubstract) {
      case '+':
        product.amount += 1;
        break;

      case '-':
        if (product.amount > 0) {
          product.amount -= 1;
        }
        break;

      default:
        break;
    }
    console.log(product.amount);
  }

  return (
    <>
      <h2>Esto es un carro</h2>
      <ul>
        {
        cartProducts.map((singleProduct) => (
          <li>
            <span>{`Product name ${singleProduct.name}`}</span>
            <span>{`${singleProduct.price}€`}</span>
            <button type="button" onClick={() => productQuantity(singleProduct, '-')}>-</button>
            <span>{`Units ${singleProduct.amount}`}</span>
            <button type="button" onClick={() => productQuantity(singleProduct, '+')}>+</button>
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
