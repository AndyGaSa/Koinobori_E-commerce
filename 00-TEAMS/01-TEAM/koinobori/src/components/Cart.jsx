import React from 'react';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

export default function Cart() {
  const newLocalStorage = JSON.parse(localStorage.getItem('cart'));

  return (
    <main>
      { newLocalStorage === null
        ? <EmptyCart />
        : <FilledCart />}
    </main>
  );
}
