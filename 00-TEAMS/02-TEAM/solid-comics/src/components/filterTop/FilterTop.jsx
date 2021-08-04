import React from 'react';

import './filterTop.scss';

import ComicCard from '../comic-card/ComicCard';

export default function FilterTop() {
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list filter-top">FILTER TOP</span>
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
