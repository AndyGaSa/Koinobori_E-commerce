/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.scss';

export default function CharacterCard({ character }) {
  // const frames = {
  //   1: 'https://i.ibb.co/5Tn58Mr/marco-5.png',
  //   2: 'https://i.ibb.co/SXtqkS2/marco-4.png',
  //   3: 'https://i.ibb.co/jzBK7Pv/marco-3.png',
  //   4: 'https://i.ibb.co/2tMNzJx/marco-1.png',
  //   0: 'https://i.ibb.co/sPrwLZk/marco-2.png'
  // };
  return (
    <>
      <div className="character__item">
        {/* <div className="character__overflow"> */}
        <Link
          to={`/character-details/${character?.id}`}
        >
          <img data-testid="create-img" className="character__img" src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt={`${character.name}`} />
          {/* <img className="character__frame" src={frames[character?.id % 5]} alt="comic" /> */}
        </Link>
        {/* </div> */}

      </div>
    </>
  );
}
