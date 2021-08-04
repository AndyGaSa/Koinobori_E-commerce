/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadComics } from '../redux/actions/comics.creators';

import './styles/ComicList.scss';


import ComicNav from '../components/comic-list/ComicNav';
import ComicFilter from '../components/comic-list/ComicFilter';

export default function ComicList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadComics());
  }, []);
  const comics = useSelector((store) => store.comics);
  console.log(comics);
  return (
    <section className="section__comic-list">
      {/* <ul className="list">
        {
          comics.map((hero) => (
            <li className="list-item">
              <span className="hero-name">{hero.title}</span>
              <img className="hero-image"
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt="charachter" />
            </li>
          ))
        }
      </ul> */}

      <ComicFilter />
      <ComicNav />
    </section>
  );
}
