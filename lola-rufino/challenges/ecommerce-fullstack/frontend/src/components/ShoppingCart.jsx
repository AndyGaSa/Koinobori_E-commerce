import React from 'react';
import './ShoppingCart.scss';

export default function ShoppingCart() {
  return (
    <main>
      <h2>Cart</h2>
      <ul />
      <span>Total price: </span>
      <div className="buttons__container">
        <button type="button" className="buttons">Pay</button>
        <button type="button" className="buttons">Clear</button>
      </div>
    </main>
  );
}
