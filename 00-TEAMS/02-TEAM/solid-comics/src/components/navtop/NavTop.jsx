import React from 'react';

import './navTop.scss';

import { useSelector } from 'react-redux';
import ComicCard from '../comic-card/ComicCard';

export default function NavTop() {
  const comics = useSelector((store) => store.comics);
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list nav-top">NAV TOP</span>
        {comics.length && comics.slice(9, 11).map((
          comic
        ) => <ComicCard comic={comic} key={comic?.id} />)}
      </div>
    </>
  );
}
