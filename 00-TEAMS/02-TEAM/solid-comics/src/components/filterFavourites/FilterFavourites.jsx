import React from 'react';
import { useSelector } from 'react-redux';
import ComicCard from '../comic-card/ComicCard';
import './filterFavourites.scss';

export default function FilterFavourites() {
  const comics = useSelector((store) => store.comics);
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list filter-favourites">FILTER FAVOURITES</span>
        {comics.length && comics.slice(5, 8).map((
          comic
        ) => <ComicCard comic={comic} key={comic.id} />)}
      </div>
    </>
  );
}
