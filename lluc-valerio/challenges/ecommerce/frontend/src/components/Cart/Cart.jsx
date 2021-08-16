// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems } from '../../redux/actions/actionCreator';

import '../../styles/Cart.scss';

export default function Cart() {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartItems('611960d2fdf6901a047aa981'));
  }, []);

  return (
    <aside className="cart">
      <h2 className="cart__title">CART</h2>
      <ul className="cart__items">
        {items[0]?.products?.map((item) => (
          <li key={item.product.name}>
            <div className="cart-item">
              <span className="cart-item__name">{item.product.name}</span>
              <span className="cart-item__price">
                {item.product.price}
                €
              </span>
              <span className="cart-item__stock">
                Stock:
                {' '}
                {item.amount}
              </span>
              <button type="button">Add</button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
