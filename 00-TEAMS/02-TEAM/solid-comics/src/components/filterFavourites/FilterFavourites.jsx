import React from 'react';
import ComicCard from '../comic-card/ComicCard';
import './filterFavourites.scss';

export default function FilterFavourites() {
  return (
    <>
      <span>-------FILTER FAVOURITES--------</span>
      <div className="comic__row">
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
