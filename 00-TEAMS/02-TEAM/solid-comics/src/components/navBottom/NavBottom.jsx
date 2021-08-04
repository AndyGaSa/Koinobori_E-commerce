import React from 'react';

import './navBottom.scss';

import ComicCard from '../comic-card/ComicCard';

export default function NavBottom() {
  return (
    <>
      <span>-------NAV BOTTOM--------</span>
      <div className="comic__row">
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
