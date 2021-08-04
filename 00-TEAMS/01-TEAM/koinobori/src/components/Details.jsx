import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Details.scss';

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
    <main className="main">

      <section className="main__container">
        <h2 className="main__title">{stock?.name}</h2>
        <div className="main__product">
          <figure className="product__images">
            <img className="product__bigimage" src={stock?.imageFront} alt="" />
            <ul className="product__smallimages-container">
              {stock
      && stock.imageDetails.map((item) => (
        <li><img className="product__smallimage" src={item} alt="" /></li>
      ))}
            </ul>
          </figure>

          <div className="product__info">
            <div className="info__price"><span className="price">{stock?.price}</span></div>
            <ul>
              {stock
      && stock.description.map((item) => (
        <li className="info__description">{`${item}`}</li>
      ))}
            </ul>
            <small>Tax included. Shipping calculated at checkout.</small>
            <button className="info__addtocart" type="button" onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </section>
    </main>
  );
}
