import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Trending.scss';

export default function Category() {
  const stockList = useSelector((store) => store.stock);
  const { category } = useParams();
  return (
    <main className="main">

      <section className="main__container">
        <h2 data-testid={category} className="main__title">{category}</h2>
        <section className="main__products">
          {stockList.clothes
          && stockList.clothes[category].map((item) => (
            <figure className="product__container">
              <Link className="product__link" to={`/details/${category}/${item.id}`}>
                <img className="product__image" src={`${item.imageFront}`} alt={`${category}`} />
                <section className="product__caption">
                  <figcaption>{`${item.name}`}</figcaption>
                  <figcaption>{`${item.price}`}</figcaption>
                </section>
              </Link>
            </figure>
          ))}
        </section>
      </section>

    </main>
  );
}
