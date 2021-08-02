import React from 'react';
import { useSelector } from 'react-redux';
import extractLengthClothes from '../utils/utils.const';
import './Trending.css';

export default function Trending() {
  const stockList = useSelector((store) => store.stock);
  return (
    <main className="main">

      <section className="main__container">
        <h2 className="main__title">NEW ARRIVALS</h2>

        <section className="main__products">

          <figure className="main__product">
            <img src={`${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.imageFront}`} alt="Last t-shirt arrival" />
            <figcaption>{`${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.name}`}</figcaption>
            <figcaption>{`${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.price}`}</figcaption>
          </figure>

          <figure className="main__product">
            <img src={`${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.imageFront}`} alt="Last short arrival" />
            <figcaption>{`${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.name}`}</figcaption>
            <figcaption>{`${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.price}`}</figcaption>
          </figure>

          <figure className="main__product">
            <img src={`${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.imageFront}`} alt="Last accessorize arrival" />
            <figcaptio>{`${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.name}`}</figcaptio>
            <figcaption>{`${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.price}`}</figcaption>
          </figure>

        </section>
      </section>

      <section className="main__container">
        <h2 className="main__title">MOST POPULAR</h2>

        <section className="main__products">

          <figure className="main__product">
            <img src={`${stockList?.clothes?.tShirts[1]?.imageFront}`} alt="T-shirt popular" />
            <figcaption>{`${stockList?.clothes?.tShirts[1]?.name}`}</figcaption>
            <figcaption>{`${stockList?.clothes?.tShirts[1]?.price}`}</figcaption>
          </figure>

          <figure className="main__product">
            <img src={`${stockList?.clothes?.shorts[1]?.imageFront}`} alt="Short most popular" />
            <figcaption>{`${stockList?.clothes?.shorts[1]?.name}`}</figcaption>
            <figcaption>{`${stockList?.clothes?.shorts[1]?.price}`}</figcaption>
          </figure>

          <figure className="main__product">
            <img src={`${stockList?.clothes?.accessories[1]?.imageFront}`} alt="Accessorize popular" />
            <figcaption>{`${stockList?.clothes?.accessories[1]?.name}`}</figcaption>
            <figcaption>{`${stockList?.clothes?.accessories[1]?.price}`}</figcaption>
          </figure>

        </section>
      </section>
    </main>
  );
}
