import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payProducts } from '../redux/actions/actionCreator';

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  function handlePay() {
    dispatch(payProducts(cart));
  }

  return (
    <footer>
      <hr />
      {
        !!cart.items.length && (
          <ul>
            {cart?.items?.map((item) => (
              <li key={item.name}>
                {item.name}
                {' '}
                -
                {item.price}
                -
                {item.amount}
              </li>
            ))}
          </ul>
        )

      }
      <p data-testid="total-price">
        Total price:
        {cart?.totalPrice}
      </p>
      <button
        type="button"
        data-testid="pay-button"
        onClick={handlePay}
      >
        Pagar

      </button>
    </footer>
  );
}
