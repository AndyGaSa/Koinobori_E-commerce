/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart, faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  getCart, addProductToCart, substractProductFromCart, saveCart, clearCart, submitCart
} from '../../redux/actions/cart.creator';
import './cart.scss';

function Cart({ user }) {
  const dispatch = useDispatch();
  const userCart = useSelector(({ cart }) => cart);
  const [cartClass, setCartClass] = useState('cart--closed');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (user?.name) {
      dispatch(getCart(user._id));
    }
  }, [user]);

  useEffect(() => {
    const newTotalPrice = userCart.products
      .reduce((acc, { product, amount }) => acc + product.price * amount, 0);
    setTotalPrice(newTotalPrice);
  }, [userCart]);

  function openCloseCart() {
    return cartClass ? setCartClass('') : setCartClass('cart--closed');
  }

  function transformCartData() {
    return {
      ...userCart,
      products: userCart.products.map(({ product, amount }) => (
        {
          product: product._id,
          amount
        }))
    };
  }

  function saveCartData() {
    const cartData = transformCartData();
    dispatch(saveCart(cartData));
  }

  function pay() {
    const cartData = transformCartData();
    dispatch(submitCart(cartData));
  }

  return (
    <section data-testid="cart" className={`cart ${cartClass}`}>
      <div className="cart__clear">
        <h2 data-testid="cart-title" className="cart__title">Cart</h2>
        {user?.name && (
        <div>
          <button data-testid="save-button" className="cart__save-button" type="button" aria-label="Save cart" onClick={saveCartData}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button data-testid="clear-cart-button" className="cart__save-button" type="button" aria-label="Clear cart" onClick={() => dispatch(clearCart())}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
        )}
      </div>
      <ul className="cart__cart-products">
        {userCart.products.map(({ product, amount }, index) => (
          <li data-testid={`cart-element-${index}`} className="cart-products__product" key={`${product.name}-shoe`}>
            <img className="product__image" src={product.img} alt={product.name} />
            <span className="product__name">{product.name}</span>
            <span className="product__price">
              {product.price}
              €
            </span>
            <div className="product__amount">
              <button data-testid={`element-${index}-substract-button`} className="product__substract-button" type="button" aria-label="Substract" onClick={() => dispatch(substractProductFromCart(product._id))}>-</button>
              <span data-testid={`element-${index}-amount`} className="product__quantity">{amount}</span>
              <button data-testid={`element-${index}-add-button`} className="product__add-button" type="button" aria-label="Add" onClick={() => dispatch(addProductToCart(product))}>+</button>
            </div>
          </li>
        ))}
      </ul>
      {userCart.products.length > 0
        ? <button data-testid="pay-button" type="button" className="cart__pay-button" onClick={pay}>Pay</button>
        : <span className="cart__empty">{user?.name ? 'Cart is empty' : 'Login to add products'}</span>}
      <button data-testid="open-cart-button" type="button" className="cart__summary" onClick={openCloseCart}>
        <div>
          <span className="cart__open-icon" />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <p>
          Total Price:
          {' '}
          <span>
            {totalPrice}
            €
          </span>
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
