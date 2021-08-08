import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCharacters } from '../redux/actions/comics.creators';

import './styles/Characters.scss';

import CharactersGroupA from '../components/charactersGroupA/CharactersGroupA';

export default function characterList() {
  const dispatch = useDispatch();
  const characters = useSelector((store) => store.characters);
  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  if (characters.length > 0) {
    return (
      <section data_testId="characters-list" className="section__characters-list">
        <CharactersGroupA />
      </section>
    );
  }
  return (
    <section className="section__characters-list" />
  );
}
