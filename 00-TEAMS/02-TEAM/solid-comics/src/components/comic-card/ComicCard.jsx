import React from 'react';

import './comicCard.scss';

export default function ComicCard() {
  return (
    <div className="comic__item">
      <img className="item__img" src="https://i.annihil.us/u/prod/marvel/i/mg/f/90/610411d34068b/portrait_uncanny.jpg" alt="Spirits of Vengeance: Spirit Rider #1" />
      <div>
        <h5>Spirits of Vengeance: Spirit Rider #1 </h5>
        <p>B. Earl, Veregge</p>
      </div>
    </div>
  );
}
