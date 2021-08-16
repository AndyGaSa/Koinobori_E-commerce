import React from 'react';

import './Search.scss';

export default function Search() {
  return (
    <>
      <div className="search-container">
        <div className="search-container__left">
          <input
            type="text"
            placeholder="Search"
          />
          <section className="search-container__left__radios">
            <label htmlFor="by_name">
              <input type="radio" id="by_name" />
              by name
            </label>
            <label htmlFor="by_description">
              <input type="radio" id="by_description" />
              by description
            </label>
          </section>
        </div>
        <div className="search-container__right">
          <button
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
