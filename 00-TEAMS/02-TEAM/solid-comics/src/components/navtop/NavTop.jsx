import React from 'react';

import './navTop.scss';

import ComicCard from '../comic-card/ComicCard';

export default function NavTop() {
  return (
    <>
      <span>-------NAV TOP--------</span>
      <div className="comic__row">
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
