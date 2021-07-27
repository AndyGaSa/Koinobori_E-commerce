import React from 'react';
import Heroes from '../components/Main/Heroes';

export default function HeroesList() {
  const heroesList = [
    'Hero1',
    'Hero2',
    'Hero3',
    'Hero4',
    'Hero5',
  ];
  return (
    <>
      <Heroes heroes={heroesList} />
    </>
  );
}
