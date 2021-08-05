/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './comicCard.scss';

export default function ComicCard() {
  const comics = useSelector((store) => store.comics);
  const idUrl = window.location.search.split('?')[1];
  const targetComic = comics.filter((comic) => comic.id !== idUrl);

  return (
    <>
      <div className="comic__item">
        <Link
          to={`/details/${targetComic[0]?.id}`}
        >
          <img data-testid="create-img" className="item__img" src={`${targetComic[0]?.thumbnail?.path}.${targetComic[0]?.thumbnail?.extension}`} alt="comic" />
        </Link>
      </div>
    </>
  );
}
