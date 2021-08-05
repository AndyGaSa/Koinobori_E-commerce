import React from 'react';

import './navBottom.scss';

import { useSelector } from 'react-redux';
import ComicCard from '../comic-card/ComicCard';

export default function NavBottom() {
  const comics = useSelector((store) => store.comics);
  return (
    <>
      <div className="comic__row">
        <span className="titels__comic-list nav-bottom">NAV BOTTOM</span>
        {comics.length && comics.slice(11, 14).map((
          comic
        ) => <ComicCard comic={comic} key={comic.id} />)}
      </div>
    </>
  );
}
