import React from 'react';
import ComicCard from '../comic-card/ComicCard';
import './filterFavourites.scss';

export default function FilterFavourites() {
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list filter-favourites">FILTER FAVOURITES</span>
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
