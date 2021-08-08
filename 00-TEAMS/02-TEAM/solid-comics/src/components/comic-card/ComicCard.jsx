/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import './comicCard.scss';

export default function ComicCard({ comic }) {
  const frames = {
    1: 'https://i.ibb.co/5Tn58Mr/marco-5.png',
    2: 'https://i.ibb.co/SXtqkS2/marco-4.png',
    3: 'https://i.ibb.co/jzBK7Pv/marco-3.png',
    4: 'https://i.ibb.co/2tMNzJx/marco-1.png',
    0: 'https://i.ibb.co/sPrwLZk/marco-2.png'
  };
  return (

    <>
      <div className="comic__item">
        <div className="overflow">
          <Link
            to={`/comic-details/${comic?.id}`}
          >
            <img data-testid="create-img" className="item__img" src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt="comic" />
          </Link>
        </div>
        <img className="frame" src={frames[comic?.id % 5]} alt="comic" />
      </div>
    </>
  );
}
