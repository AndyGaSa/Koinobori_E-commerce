import React from 'react';
import Heroes from '../components/Heroes/Heroes';
import heroesListConst from '../assets/heroes';

export default function HeroesList() {
  return (
    <>
      <Heroes heroes={heroesListConst} />
    </>
  );
}
