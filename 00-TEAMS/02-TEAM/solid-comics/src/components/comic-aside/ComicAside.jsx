/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ComicAside.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterComics } from '../../redux/actions/comics.creators';

export default function ComicAside() {
  const dispatch = useDispatch();
  const comics = useSelector((store) => store.comics);
  function filter(inputValue) {
    if (!inputValue.trim()) {
      dispatch(filterComics(false));
    } else {
      dispatch(filterComics(inputValue, comics));
    }
  }

  return (
    <aside className="filter__aside-container">

      <div className="filter__button-images-container">
        <button onClick={() => filter('avengers')} type="button" className="filter__button">

          <img
            className="filter__button-image"
            src="https://i.ibb.co/dWGry3z/filter-aside-0000s-0005-avengers-copia.png"
            alt="filter-aside-0000s-0005-avengers-copia"
            border="0"
          />
        </button>

        <button onClick={() => filter('x-men')} type="button" className="filter__button">
          <img
            className="filter__button-image"
            src="https://i.ibb.co/rZsPdhD/filter-aside-0000s-0004-xmen-copia.png"
            alt="filter-aside-0000s-0004-xmen-copia"
            border="0"
          />
        </button>

        <button onClick={() => filter('fantastic')} type="button" className="filter__button">

          <img
            className="filter__button-image"
            src="https://i.ibb.co/LNtGqhm/filter-aside-0000s-0003-fantastic4-copia.png"
            alt="filter-aside-0000s-0003-fantastic4-copia"
            border="0"
          />
        </button>

      </div>
      <input
        className="filter__input"
        onChange={(
          (event) => filter(
            event.target.value
          ))}
        type="text"
        name="input-search"
      />
    </aside>
  );
}
