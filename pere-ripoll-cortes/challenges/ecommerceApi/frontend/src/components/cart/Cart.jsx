import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function Cart() {
  const inCart = useSelector(({ cart }) => cart);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(inCart);
  }, [inCart]);

  return (
    <>
      <h1>Carrito</h1>
      {basket.map((e) => (<p>{e.name}</p>))}
    </>
  );
}
