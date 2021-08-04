import React from 'react';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

export default function Cart() {
  const LocalStorage = JSON.parse(localStorage.getItem('cart'));

  return (
    <>
      { LocalStorage === null
        ? <EmptyCart />
        : <FilledCart />}
    </>
  );
}
