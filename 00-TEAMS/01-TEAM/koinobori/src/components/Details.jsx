import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Details() {
  const stockList = useSelector((store) => store.stock);
  console.log(stockList);

  const { stockId } = useParams();
  const { category } = useParams();
  const [stock, setStock] = useState();

  useEffect(() => {
    setStock(stockList.clothes
      && stockList.clothes[category].find((stockNow) => stockNow.id === +stockId));
  }, [stockId, stockList]);

  console.log(stock);

  return (
    <main>
      <h2>{stock?.name}</h2>
      <section>
        <section>
          <figure>
            <img src={`${stock?.imageFront}`} alt="" />
            <img src={`${stock?.imageBack}`} alt="" />
          </figure>
        </section>
        <section>
          <section>{stock?.price}</section>
          <ul>
            {stock
      && stock.description.map((item) => (
        <li>{`${item}`}</li>
      ))}
          </ul>
          <span>Tax included. Shipping calculated at checkout.</span>
          <button type="button">ADD TO CART</button>
        </section>
      </section>
    </main>
  );
}
