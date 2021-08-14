import React from 'react';
import CartItem from '../components/CartItem/CartItem';

export default function Cart() {
  return (
    <main>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <button type="button">buy</button>
      <button type="button">cancel</button>
    </main>
  );
}
