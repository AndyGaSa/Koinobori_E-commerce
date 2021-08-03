import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import extractLengthClothes from '../utils/utils.const';
import './Trending.scss';

export default function Trending() {
  const stockList = useSelector((store) => store.stock);

  return (
    <main className="main">

      <section className="main__container">
        <h2 className="main__title">NEW ARRIVALS</h2>

        <section className="main__products">

          <figure className="product__container">
            <Link className="product__link" to={`/details/tShirts/${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.id}`}>
              <img className="product__image" src={`${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.imageFront}`} alt="Last t-shirt arrival" />
              <section className="product__caption">
                <figcaption>{`${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.name}`}</figcaption>
                <figcaption>{`${stockList?.clothes?.tShirts[extractLengthClothes(stockList, 'tShirts')]?.price}`}</figcaption>
              </section>
            </Link>
          </figure>

          <figure className="product__container">
            <Link className="product__link" to={`/details/shorts/${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.id}`}>
              <img className="product__image" src={`${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.imageFront}`} alt="Last short arrival" />
              <section className="product__caption">
                <figcaption>{`${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.name}`}</figcaption>
                <figcaption className="caption__price">{`${stockList?.clothes?.shorts[extractLengthClothes(stockList, 'shorts')]?.price}`}</figcaption>
              </section>
            </Link>
          </figure>

          <figure className="product__container">
            <Link className="product__link" to={`/details/accessories/${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.id}`}>
              <img className="product__image" src={`${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.imageFront}`} alt="Last accessorize arrival" />
              <section className="product__caption">
                <figcaption>{`${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.name}`}</figcaption>
                <figcaption className="caption__price">{`${stockList?.clothes?.accessories[extractLengthClothes(stockList, 'accessories')]?.price}`}</figcaption>
              </section>
            </Link>
          </figure>

        </section>
      </section>

      <section className="main__container">

        <h2 className="main__title">MOST POPULAR</h2>

        <section className="main__products">

          <figure className="product__container">
            <Link className="product__link" to={`/details/tShirts/${stockList?.clothes?.tShirts[1]?.id}`}>
              <img className="product__image" src={`${stockList?.clothes?.tShirts[1]?.imageFront}`} alt="T-shirt popular" />
              <section className="product__caption">
                <figcaption>{`${stockList?.clothes?.tShirts[1]?.name}`}</figcaption>
                <figcaption className="caption__price">{`${stockList?.clothes?.tShirts[1]?.price}`}</figcaption>
              </section>
            </Link>
          </figure>

          <figure className="product__container">
            <Link className="product__link" to={`/details/shorts/${stockList?.clothes?.shorts[1]?.id}`}>
              <img className="product__image" src={`${stockList?.clothes?.shorts[1]?.imageFront}`} alt="Short most popular" />
              <section className="product__caption">
                <figcaption>{`${stockList?.clothes?.shorts[1]?.name}`}</figcaption>
                <figcaption className="caption__price">{`${stockList?.clothes?.shorts[1]?.price}`}</figcaption>
              </section>
            </Link>
          </figure>

          <figure className="product__container">
            <Link className="product__link" to={`/details/accessories/${stockList?.clothes?.accessories[1]?.id}`}>
              <img className="product__image" src={`${stockList?.clothes?.accessories[1]?.imageFront}`} alt="Accessorize popular" />
              <section className="product__caption">
                <figcaption>{`${stockList?.clothes?.accessories[1]?.name}`}</figcaption>
                <figcaption className="caption__price">{`${stockList?.clothes?.accessories[1]?.price}`}</figcaption>
              </section>
            </Link>
          </figure>

        </section>
      </section>
    </main>
  );
}
