/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ComicAside.scss';
import { useDispatch } from 'react-redux';
import { filterComics } from '../../redux/actions/comics.creators';

export default function ComicAside() {
  const dispatch = useDispatch();
  function filter() {
    const baseUrl = 'http://gateway.marvel.com/v1/public/';

    const limit = 'limit=10';
    const offset = 'offset=0';
    const apikey = 'apikey=a717c0f1c6c7e9f36248d126d74b8f67';
    const hash = 'hash=6afa5ea281d51757fc165b2dd77446c5';
    const completeUrl = `${baseUrl}comics?ts=1&${limit}&${offset}&${apikey}&${hash}`;
    dispatch(filterComics(completeUrl));
  }

  return (
    <aside className="filter__aside-container">
      <form />
      <form className="filter__button-images-container">
        <label className="filter__button">
          <input
            type="radio"
            id="avengers"
            name="collection"
            value="avengers"
            checked
          />
          <img
            className="filter__button-image"
            src="https://i.ibb.co/dWGry3z/filter-aside-0000s-0005-avengers-copia.png"
            alt="filter-aside-0000s-0005-avengers-copia"
            border="0"
          />
        </label>

        <label className="filter__button">
          <input
            type="radio"
            id="xmen"
            name="collection"
            value="xmen"
          />
          <img
            className="filter__button-image"
            src="https://i.ibb.co/rZsPdhD/filter-aside-0000s-0004-xmen-copia.png"
            alt="filter-aside-0000s-0004-xmen-copia"
            border="0"
          />
        </label>

        <label className="filter__button">
          <input
            type="radio"
            id="fantastic"
            name="collection"
            value="fantastic"
          />
          <img
            className="filter__button-image"
            src="https://i.ibb.co/LNtGqhm/filter-aside-0000s-0003-fantastic4-copia.png"
            alt="filter-aside-0000s-0003-fantastic4-copia"
            border="0"
          />
        </label>
        <label className="filter__button">
          <input
            type="radio"
            id="conan"
            name="collection"
            value="conan"
          />
          <img
            className="filter__button-image"
            src="https://i.ibb.co/rwVz5XL/filter-aside-0000s-0002-conan-copia.png"
            alt="filter-aside-0000s-0002-conan-copia"
            border="0"
          />
        </label>
      </form>
      <input className="filter__input" type="text" name="input-search" />
      <button
        type="button"
        className="filter__go-button"
        onClick={filter}
      >
        GO
      </button>
    </aside>
  );
}
