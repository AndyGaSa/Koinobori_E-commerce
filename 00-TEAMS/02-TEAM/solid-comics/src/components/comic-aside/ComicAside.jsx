import React from 'react';
import './ComicAside.scss';
import { filterComics } from '../../redux/actions/comics.creators';

export default function ComicAside() {
  return (
    <aside className="filter__aside-container">
      <div className="filter__button-images-container">
        <button className="filter__button" type="button" href="https://imgbb.com/">
          <img
            className="filter__button-image"
            src="https://i.ibb.co/dWGry3z/filter-aside-0000s-0005-avengers-copia.png"
            alt="filter-aside-0000s-0005-avengers-copia"
            border="0"
          />
        </button>
        <button className="filter__button" type="button" href="https://imgbb.com/">
          <img
            className="filter__button-image"
            src="https://i.ibb.co/rZsPdhD/filter-aside-0000s-0004-xmen-copia.png"
            alt="filter-aside-0000s-0004-xmen-copia"
            border="0"
          />
        </button>
        <button className="filter__button" type="button" href="https://imgbb.com/">
          <img
            className="filter__button-image"
            src="https://i.ibb.co/LNtGqhm/filter-aside-0000s-0003-fantastic4-copia.png"
            alt="filter-aside-0000s-0003-fantastic4-copia"
            border="0"
          />
        </button>
        <button className="filter__button" type="button" href="https://imgbb.com/">
          <img
            className="filter__button-image"
            src="https://i.ibb.co/rwVz5XL/filter-aside-0000s-0002-conan-copia.png"
            alt="filter-aside-0000s-0002-conan-copia"
            border="0"
          />
        </button>
      </div>
      <input className="filter__input" type="text" name="input-search" />
      <button
        type="button"
        className="filter__go-button"
        onClick={filterComics}
      >
        GO
      </button>
    </aside>
  );
}
