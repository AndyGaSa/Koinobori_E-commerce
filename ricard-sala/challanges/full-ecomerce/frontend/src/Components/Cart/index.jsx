import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { payProducts } from '../../redux/actions/actionCreators';
import './styles.scss';

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  function handlePay() {
    dispatch(payProducts(cart));
  }
  return (
    <div className="cart">
      <h3 className="cart__user">riki CART</h3>
      <div className="cart__products">
        {cart.map((element) => (
          <div className="cart__item" key={element?.name}>
            <img className="cart__img" src={element?.img} alt="imagen" />
            <div className="cart__info">
              <span className="cart__name">{element?.name}</span>
              <span className="cart__price">{element?.price}</span>
            </div>

          </div>
        )) }
      </div>
      <p datatestid="total-price">
        Total price:
        {cart?.totalPrice}
      </p>
      <button className="button__cart" type="button" onClick={handlePay}>
        <img className="img__button" src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" alt="cart" />
        buy

      </button>
    </div>
  );
}
