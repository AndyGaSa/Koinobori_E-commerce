import React from 'react';

import './comicCard.scss';
import { Link } from 'react-router-dom';

export default function ComicCard() {
  return (
    <>
      <div className="comic__item">
        <Link
          to="/details/vvvvvv"
        >
          <img className="item__img" src="https://i.annihil.us/u/prod/marvel/i/mg/f/90/610411d34068b/portrait_uncanny.jpg" alt="Spirits of Vengeance: Spirit Rider #1" />
          <div>
            <h5>Spirits of Vengeance: Spirit Rider #1 </h5>
            <p>B. Earl, Veregge</p>
          </div>
        </Link>
      </div>
    </>
  );
}
