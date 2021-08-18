import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, payProducts } from '../../redux/actions/actionCreator';

import './Cart.css';

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function handlePay() {
    dispatch(payProducts(cart));
  }

  return (
    <main className="main__user-cart">
      <section className="user-cart__cart-items">
        <h3>Tus productos seleccionados</h3>
        <ul className="cart-items__list">
          {cart?.items?.map((item) => (
            <div className="list__cart-item" key="item_name">
              <li className="cart-item__item">
                <h3>{item.name}</h3>
                <h4>{item.author}</h4>
                <button
                  type="button"
                  className="item__button"
                >
                  -
                </button>
                <div className="item__amount">{item.amount}</div>
                <button
                  type="button"
                  className="item__button"
                  onClick={addToCart}
                >
                  +
                </button>
              </li>
            </div>
          ))}
        </ul>

      </section>
      <section>
        <h3 className="totalPrice">
          Precio Total:
          {' '}
          {cart?.totalPrice}
        </h3>
      </section>
      <section className="buttons">
        <button
          type="button"
          className="buttons_pay"
          onClick={handlePay}
        >
          Pagar
        </button>
      </section>
    </main>
  );
}
