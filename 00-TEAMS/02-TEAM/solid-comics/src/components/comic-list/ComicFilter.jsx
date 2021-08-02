import React from 'react';
import './ComicList.css';
import FilterTop from '../filterTop/FilterTop';
import FilterFavourites from '../filterFavourites/FilterFavourites';

export default function ComicFilter() {
  return (
    <section>
      <FilterTop />
      <FilterFavourites />
    </section>
  );
}
