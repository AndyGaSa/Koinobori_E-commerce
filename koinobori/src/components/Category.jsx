/* eslint-disable no-debugger */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Category() {
  const stockList = useSelector((store) => store.stock);
  const { category } = useParams();
  return (
    <main className="main">

      <section className="main__container">
        <h2 className="main__title">{category}</h2>
        {stockList.clothes
      && stockList.clothes[category].map((item) => (
        <figure className="product__container">
          <Link to={`/details/${category}/${item.id}`}>
            <img className="product__image" src={`${item.imageFront}`} alt={`${category}`} />
            <figcaption>{`${item.name}`}</figcaption>
            <figcaption>{`${item.price}`}</figcaption>
          </Link>
        </figure>
      ))}
      </section>

    </main>
  );
}
