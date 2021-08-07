/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import './comicCard.scss';

export default function ComicCard({ comic }) {
  return (

    <>
      <div className="comic__item">
        <Link
          to={`/details/${comic?.id}`}
        >
          <img data-testid="create-img" className="item__img" src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />
        </Link>
      </div>
    </>
  );
}
