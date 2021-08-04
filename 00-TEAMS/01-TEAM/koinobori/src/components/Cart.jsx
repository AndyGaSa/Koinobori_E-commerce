import React from 'react';

export default function Cart() {
  const newLocalStorage = JSON.parse(localStorage.getItem('cart'));

  return (
    <main>
      <h1>soy el carrito</h1>
      <ul>
        {newLocalStorage.map((item) => <li>{item.name}</li>)}
      </ul>
    </main>
  );
}
