import React from 'react';

import './BeerCard.scss';

export default function beerCard() {
  return (
    <section className="card-container">
      <div className="card-container__left">
        <h2>Beer Name</h2>
        <img src="" alt="" />
      </div>
      <p className="card-container__center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ad cumque esse ullam incidunt nemo quo quisquam. Et voluptatem in vitae
        placeat itaque maiores ex, debitis repellat vero explicabo aliquid iusto?
      </p>
      <div className="card-container__right">
        <button
          type="button"
        >
          Another Beer
        </button>
        <button
          type="button"
        >
          Random non alchoolic
        </button>
      </div>
    </section>
  );
}
