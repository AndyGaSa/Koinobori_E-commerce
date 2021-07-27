import React from 'react';
import Heroes from '../components/Main/Heroes';
import heroesListConst from '../assets/heroes';

export default function HeroesList() {
  return (
    <>
      <Heroes heroes={heroesListConst} />
    </>
  );
}
