import React from 'react';

import './navBottom.scss';

import ComicCard from '../comic-card/ComicCard';

export default function NavBottom() {
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list nav-bottom">NAV BOTTOM</span>
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
