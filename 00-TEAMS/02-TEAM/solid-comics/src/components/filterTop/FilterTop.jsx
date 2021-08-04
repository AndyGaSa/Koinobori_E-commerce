import React from 'react';

import './filterTop.scss';

import ComicCard from '../comic-card/ComicCard';

export default function FilterTop() {
  return (
    <>
      <span>-------FILTER TOP--------</span>
      <div className="comic__row">
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
