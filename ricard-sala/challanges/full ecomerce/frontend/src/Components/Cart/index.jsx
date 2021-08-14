import React from 'react';

export default function Cart() {
  return (
    <div className="cart">
      <h3 className="cart__user">carrito compra</h3>
      <div className="cart__products">
        <span className="product">producto1</span>
        <span className="product">producto2</span>
        <span className="product">producto3</span>
        <span className="product">producto4</span>
        <button type="button">buy</button>
      </div>
    </div>
  );
}
