import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadComics from '../redux/actions/comics.creators';
import './ComicList.css';

import ComicNav from '../components/comic-list/ComicNav';

export default function ComicList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadComics());
  }, []);
  const comics = useSelector((store) => store.comics);
  console.log(comics);
  return (
    <>
      <h2>comic list</h2>

      <ul className="list">
        {
          comics.map((hero) => (
            <li className="list-item">
              <span className="hero-name">{hero.title}</span>
              <img className="hero-image" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="charachter" />
            </li>
          ))
        }
      </ul>
      <ComicNav />
    </>
  );
}
