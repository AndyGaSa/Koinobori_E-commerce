import React from 'react';
import './ShoppingCart.scss';

export default function ShoppingCart() {
  return (
    <main>
      <h2>Cart</h2>
      <ul>
        <li>Sopa de miso</li>
        <li>Wasabi</li>
        <li>Algas nori</li>
      </ul>
      <span>Total price: </span>
      <div className="buttons__container">
        <button type="button" className="buttons">Pay</button>
        <button type="button" className="buttons">Clear</button>
      </div>
    </main>
  );
}
