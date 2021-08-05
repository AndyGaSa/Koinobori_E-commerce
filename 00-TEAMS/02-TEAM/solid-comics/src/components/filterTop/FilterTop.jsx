import React from 'react';

import './filterTop.scss';

import { useSelector } from 'react-redux';
import ComicCard from '../comic-card/ComicCard';

export default function FilterTop() {
  const comics = useSelector((store) => store.comics);
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list filter-top">FILTER TOP</span>
        {comics.length && comics.slice(0, 4).map((
          comic
        ) => <ComicCard comic={comic} key={comic.id} />)}
      </div>
    </>
  );
}
