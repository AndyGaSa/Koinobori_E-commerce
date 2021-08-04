/* eslint-disable jsx-a11y/aria-role */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Details() {
  const stockList = useSelector((store) => store.stock);
  const newLocalStorage = JSON.parse(localStorage.getItem('cart'));

  const { stockId } = useParams();
  const { category } = useParams();
  const [stock, setStock] = useState();
  // eslint-disable-next-line no-unused-vars
  function addToCart() {
    newLocalStorage.push(stock);
    localStorage.setItem('cart', JSON.stringify(newLocalStorage));
  }
  useEffect(() => {
    setStock(stockList.clothes
      && stockList.clothes[category].find((stockNow) => stockNow.id === +stockId));
  }, [stockId, stockList]);

  return (
    <main>
      <h2>{stock?.name}</h2>
      <section>
        <section>
          <figure>
            <ul>
              {stock
      && stock.imageDetails.map((item) => (
        <img src={item} alt="" />
      ))}
            </ul>
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
          <button type="button" role="btnAddToCart" onClick={addToCart}>ADD TO CART</button>
        </section>
      </section>
    </main>
  );
}
