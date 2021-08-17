/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCart, deleteItemFromCart, deleteCart } from '../redux/actions/actionCreators';
import './ShoppingCart.scss';

export default function ShoppingCart() {
  const cart = useSelector((store) => store.cart);
  console.log('esto es cart', cart);
  const dispatch = useDispatch();
  const [cartRunning, setCartRunning] = useState(true);

  useEffect(() => {
    setCartRunning(true);
    dispatch(loadCart());
  }, [cartRunning]);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <main>
      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem._id} className="list__container">
            <div className="list__item">
              {cartItem.products[0].product.name}
              ,
            </div>
            <div className="list__item">
              {cartItem.products[0].amount}
            </div>
            <div className="list__item">
              <button type="button" className="list__button" onClick={() => { deleteItemFromCart(cartItem._id); setCartRunning(false); }}>x</button>
            </div>
          </li>
        ))}
      </ul>
      <span>Total price: </span>
      <div className="buttons__container">
        <button type="button" className="buttons">Pay</button>
        <button type="button" className="buttons" onClick={() => deleteCart(cart._id)}>Clear</button>
      </div>
    </main>
  );
}
