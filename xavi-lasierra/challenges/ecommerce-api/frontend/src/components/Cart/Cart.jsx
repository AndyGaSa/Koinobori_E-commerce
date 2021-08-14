import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import cart from '../../mocks/cart.mock';
import './cart.scss';

function Cart() {
  const [cartClass, setCartClass] = useState('cart--closed');

  function openCloseCart() {
    return cartClass ? setCartClass('') : setCartClass('cart--closed');
  }

  return (
    <section className={`cart ${cartClass}`}>
      {}
      <div className="cart__clear">
        <h2 className="cart__title">Cart</h2>
        <button className="cart__clear-button" type="button" aria-label="Clear cart">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
      <ul className="cart__cart-products">
        { cart.products.map(({ productInformation, amount }) => (
          <li className="cart-products__product" key={`${productInformation.name}-shoe`}>
            <img className="product__image" src={productInformation.img} alt={productInformation.name} />
            <span className="product__name">{productInformation.name}</span>
            <span className="product__price">
              {productInformation.price}
              €
            </span>
            <div className="product__amount">
              <button className="product__substract-button" type="button" aria-label="Substract">-</button>
              <span className="product__quantity">{amount}</span>
              <button className="product__add-button" type="button" aria-label="Add">+</button>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className="cart__pay-button">Pay</button>
      <button type="button" className="cart__summary" onClick={openCloseCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <p>
          Total Price:
          {' '}
          <span>10€</span>
        </p>
      </button>
    </section>
  );
}

export default Cart;
