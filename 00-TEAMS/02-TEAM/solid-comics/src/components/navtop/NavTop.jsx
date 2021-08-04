import React from 'react';

import './navTop.scss';

import ComicCard from '../comic-card/ComicCard';

export default function NavTop() {
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list nav-top">NAV TOP</span>
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>
    </>
  );
}
