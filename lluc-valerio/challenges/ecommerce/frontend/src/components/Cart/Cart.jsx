import React from 'react';

import '../../styles/Cart.scss';

export default function Cart() {
  return (
    <aside className="cart">

      <h2 className="cart__title">CART</h2>
      <ul className="cart__items">
        <li>
          <div className="cart-item">
            <span className="cart-item__name">Joc 1</span>
            <span className="cart-item__price">70€</span>
            <span className="cart-item__stock">Stock: 3</span>
            <button type="button">Add</button>
          </div>
        </li>
        <li>
          <div className="cart-item">
            <span className="cart-item__name">Joc 1</span>
            <span className="cart-item__price">70€</span>
            <span className="cart-item__stock">Stock: 3</span>
            <button type="button">Add</button>
          </div>
        </li>
      </ul>

    </aside>
  );
}
