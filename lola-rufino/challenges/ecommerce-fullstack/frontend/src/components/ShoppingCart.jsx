import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCart } from '../redux/actions/actionCreators';
import './ShoppingCart.scss';

export default function ShoppingCart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <main>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
      <span>Total price: </span>
      <div className="buttons__container">
        <button type="button" className="buttons">Pay</button>
        <button type="button" className="buttons">Clear</button>
      </div>
    </main>
  );
}
