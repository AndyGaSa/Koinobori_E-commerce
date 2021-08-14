import React from 'react';
import './CartItem.scss';

export default function CartItem() {
  return (
    <div className="cart-item__container">
      <img className="cart-item__image" src="https://images.punkapi.com/v2/7.png" alt="beer" />
      <span>item 001</span>
      <span>80.00$</span>
      <button type="button"> - </button>
      <span>0</span>
      <button type="button"> + </button>
    </div>
  );
}
