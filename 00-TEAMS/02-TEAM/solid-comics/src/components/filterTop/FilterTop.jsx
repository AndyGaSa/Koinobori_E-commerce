import React, { useState } from 'react';

import './filterTop.scss';

import { useSelector } from 'react-redux';
import ComicCard from '../comic-card/ComicCard';
import ComicAside from '../comic-aside/ComicAside';

export default function FilterTop() {
  const [aside, setAside] = useState(false);
  const comics = useSelector((store) => store.comics);
  const filterStore = useSelector((store) => store.filter);

  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list filter-top">TOP COMICS</span>

        {filterStore.length > 0
          ? (
            filterStore.slice(0, 4).map((
              comic
            ) => <ComicCard comic={comic} key={comic.id} />)
          ) : (
            comics.slice(0, 4).map((
              comic
            ) => <ComicCard comic={comic} key={comic.id} />)
          )}
        <button
          onClick={() => setAside(!aside)}
          className="filter-button"
          type="button"
        >
          <span className="filter-button-text">FILTER</span>
          <img className="filter-image" src="https://i.ibb.co/9wNnqRF/filter-image.jpg" alt="filter-back" />

        </button>
      </div>
      {
        aside && (
        <div className="filter-aside">
          <ComicAside />
        </div>
        )
      }
    </>
  );
}
