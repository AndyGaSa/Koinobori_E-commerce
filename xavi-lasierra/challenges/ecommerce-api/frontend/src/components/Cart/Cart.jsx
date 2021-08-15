/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { getCart, addProductToCart, substractProductFromCart } from '../../redux/actions/cart.creator';
import './cart.scss';

function Cart({ user }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const [cartClass, setCartClass] = useState('cart--closed');

  useEffect(() => {
    if (user?.name) {
      dispatch(getCart(user._id));
    }
  }, [user]);

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
        {cart.products.map(({ product, amount }) => (
          <li className="cart-products__product" key={`${product.name}-shoe`}>
            <img className="product__image" src={product.img} alt={product.name} />
            <span className="product__name">{product.name}</span>
            <span className="product__price">
              {product.price}
              €
            </span>
            <div className="product__amount">
              <button className="product__substract-button" type="button" aria-label="Substract" onClick={() => dispatch(substractProductFromCart(product._id))}>-</button>
              <span className="product__quantity">{amount}</span>
              <button className="product__add-button" type="button" aria-label="Add" onClick={() => dispatch(addProductToCart(product))}>+</button>
            </div>
          </li>
        ))}
      </ul>
      {cart.products.length > 0
        ? <button type="button" className="cart__pay-button">Pay</button>
        : <span className="cart__empty">{user?.name ? 'Cart is empty' : 'Login to add products'}</span>}
      <button type="button" className="cart__summary" onClick={openCloseCart}>
        <div>
          <span className="cart__open-icon" />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
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

Cart.propTypes = {
  user: propTypes.shape({
    _id: propTypes.string,
    name: propTypes.string,
    email: propTypes.string
  }).isRequired
};
