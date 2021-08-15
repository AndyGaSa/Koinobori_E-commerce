import React from 'react';
import './styles.scss';

export default function Cart() {
  return (
    <div className="cart">
      <h3 className="cart__user">name:riki</h3>
      <div className="cart__products" />
      <button className="button-cart" type="button">
        <img className="img-button" src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" alt="cart" />
        buy

      </button>
    </div>
  );
}
