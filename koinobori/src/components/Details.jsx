/* eslint-disable jsx-a11y/aria-role */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Details.scss';

export default function Details() {
  const stockList = useSelector((store) => store.stock);

  const { stockId } = useParams();
  const { category } = useParams();
  const [stock, setStock] = useState();
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    setStock(stockList.clothes
      && stockList.clothes[category].find((stockNow) => stockNow.id === +stockId));
  }, [stockId, stockList]);

  function addToCart() {
    const LocalStorage = JSON.parse(localStorage.getItem('cart'));
    const findIndex = LocalStorage.findIndex((item) => item.id === +stockId);
    if (LocalStorage.some((item) => item.name === stock?.name)) {
      LocalStorage[findIndex].quantity += 1;
    } else {
      stock.quantity = 1;
      stock.category = category;
      LocalStorage.push(stock);
    }
    localStorage.setItem('cart', JSON.stringify(LocalStorage));
  }
  return (
    <main className="main">

      <section className="main__container">
        <h2 className="main__title">{stock?.name}</h2>
        <div className="main__product">
          <figure className="product__images">
            <img className="product__bigimage" src={stock?.imageFront} alt="" />
            <ul className="product__smallimages-container">
              {stock
      && stock.imageDetails.map((item) => (
        <li key={item} data-testid="li-test"><img className="product__smallimage" src={item} alt="" /></li>
      ))}
            </ul>
          </figure>

          <div className="product__info">
            <div className="info__price"><span className="price">{stock?.price}</span></div>
            <ul>
              {stock
      && stock.description.map((item) => (
        <li className="info__description" key={item}>{`${item}`}</li>
      ))}

            </ul>
            <small>Tax included. Shipping calculated at checkout.</small>
            <button className="info__addtocart" type="button" role="btnAddToCart" onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>

      </section>
    </main>
  );
}
