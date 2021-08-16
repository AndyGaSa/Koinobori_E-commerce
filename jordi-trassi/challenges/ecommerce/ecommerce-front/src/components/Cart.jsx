import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payProducts } from '../redux/actions/actionCreators';

import './Cart.css';

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  function handlePay() {
    dispatch(payProducts(cart));
  }

  return (

    <section className="cart-body">
      <h2>Su cesta de caramelos:</h2>
      <div className="cart-product__list">
        {
        !!cart.items.length && (
          cart?.items?.map((item) => (
            <tr className="cart-product">
              <td key={item.neme}>
                {item.name}
              </td>
              <td>
                {item.price}
                €/Ud.
              </td>
              <td>
                {item.amount}
              </td>
              <td>
                <button
                  type="button"
                  className="cart-product__btn-delete"
                  // onClick={handleDelete}
                >
                  X
                </button>
              </td>
            </tr>
          ))
        )
        }
      </div>
      <p className="cart-products__total">
        <span>Total: </span>
        {cart?.totalPrice}
        {' '}
        €
      </p>
      <button
        type="button"
        className="btn-pagar"
        onClick={handlePay}
      >
        Pagar
      </button>
    </section>

  );
}
