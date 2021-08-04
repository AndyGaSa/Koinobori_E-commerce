import React from 'react';

export default function FilledCart() {
  const newLocalStorage = JSON.parse(localStorage.getItem('cart'));
  return (
    <ul>
      {newLocalStorage.map((item) => (
        <li>
          <img src={item.imageFront} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </li>
      ))}
    </ul>
  );
}
