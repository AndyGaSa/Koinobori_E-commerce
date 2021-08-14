import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function Cart({ product }) {
  useEffect(() => {
    console.log(product);
  }, product);
  return (
    <>
      <h1>Carrito</h1>
      <p>{product}</p>
    </>
  );
}
